const {Router} = require('express');
const Collection = require('../models/Collection');
const User = require('../models/User');
const Fieldset = require('../models/Fieldset');
const Item = require('../models/Item');
const Tag = require('../models/Tag');
const multer  = require("multer");
const path = require('path');

const router = Router();
const upload = multer()

const FileCloudApi = require('../api/FileCloudApi')

router.get('/byId', async (req, res) => {
    try {
        const coll_id = req.query.collection_id;
        const coll = await Collection.findById(coll_id)
        res.status(200).json({collection: coll.toJSON()});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops!'});
   }
})

router.get('/', async (req, res) => {
    try {
        const coll_id = req.query.collection_id;
        const coll = await Collection.findById(coll_id)
        .populate({path: 'user_id', model: User})
        .populate({
            path: 'items', model: Item,
            populate: [
                {path: 'fieldset_id', model: Fieldset},
                {path: 'tags_id', model: Tag}
        ]})
        res.status(200).json(coll.toJSON());
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops!'});
   }
})

router.get('/largest', async (req, res) => {
    try {
        const colls = await Collection.aggregate([{$project: {
            name: 1,
            description: 1,
            theme: 1,
            user_id: 1,
            created: 1,
            image_url: 1,
            itemCount: { $cond: { if: { $isArray: "$items" }, then: { $size: "$items" }, else: "NA"} },
        }}])
        .sort('-itemCount')
        .limit(3)
        .lookup({ from: 'users', localField: 'user_id', foreignField: '_id', as: 'users' });

        res.status(200).json({largest: colls});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops!'});
   }
})

router.post('/add', async (req, res) => {
    try {
        const {name, fields, coll_id, tags, scheme} = req.body;
        const tempfields = fields.map((field, i) => { if (scheme[i]) { return {name: scheme[i], value: field}}})

        const fset = await Fieldset.create({fields: tempfields})
        const item = await Item.create({
            fieldset_id: fset._id,
            collection_id: coll_id,
            name: name
        })
        for (var i = 0; i < tags.length; i++) {
            let tag = await Tag.findOne({name: tags[i]});
            if (tag) {
                item.tags_id.push(tag._id)
            } else {
                let newTag = await Tag.create({name: tags[i]})
                item.tags_id.push(newTag._id)
            }
        }
        await item.save();
        const coll = await Collection.findById(coll_id);
        coll.items.push(item._id);
        coll.save()
        res.status(201).json({item_id: item._id});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops!'});
   }
})

router.post('/create', async (req, res) => {
    try {
        const {name, theme, discription, fields, profile_name} = req.body;
        const user = await User.findOne({username: profile_name})
        const coll = await Collection.create({
            name: name,
            description: discription,
            theme: theme,
            user_id: user._id,
            field_mask: fields
        })
        user.collections.push(coll._id);
        await user.save();
        res.status(201).json({coll_id: coll._id});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops!'});
   }
})

router.post('/scheme', async (req, res) => {
    try {
        const {coll_id} = req.body
        const coll = await Collection.findOne({_id: coll_id});
        res.status(200).json(coll.field_mask);
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops!'});
   }
})

router.post('/delete', async (req, res) => {
    try {
        const coll_id = req.body.coll_id
        const delColl = await Collection.findByIdAndDelete(coll_id)
        await FileCloudApi.remove(delColl.image_id)
        res.status(200).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops!'});
    }
})

router.post('/edit', async (req, res) => {
    try {
        const data = req.body
        await Collection.findByIdAndUpdate(data.collection_id, {
            name: data.name,
            theme: data.theme,
            description: data.description
        })
        res.status(200).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops!'});
    }
})

router.post('/image', upload.any(), async (req, res) => {
    try {
        const coll_id = req.body.coll_id
        const item_id = req.body.item_id
        const img = req.files[0]
        const storage = "./server/storage"
        if (coll_id) {
            const entity = 'collections'
            const resp = await FileCloudApi.upload(img, entity, storage)
            if (resp.status) {
                await Collection.findOneAndUpdate({_id: coll_id}, {
                    image_url: resp.url,
                    image_id: resp.public_id
                })
            }
        } else if (item_id) {
            const entity = 'items'
            const resp = await FileCloudApi.upload(img, entity, storage)
            if (resp.status) {
                await Item.findOneAndUpdate({_id: item_id}, {
                    image_url: resp.url,
                    image_id: resp.public_id
                })
            }
        }
        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops!'});
   }
})

module.exports = router;
