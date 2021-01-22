const {Router} = require('express');
const Item = require('../models/Item');
const Tag = require('../models/Tag');
const Collection = require('../models/Collection');
const Comment = require('../models/Tag');
const Fieldset = require('../models/Fieldset');

const router = Router();

const FileCloudApi = require('../api/FileCloudApi')

router.get('/last', async (req, res) => {
    try {
        const items = await Item.find().sort('-created').limit(3).populate({path: 'tags_id', model: Tag})
        res.status(200).json({last: items});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch items.router : getlast'});
   }
})

router.get('/', async (req, res) => {
    try {
        const coll_id = req.query.collection_id;
        const items = await Item.find({collection_id: coll_id})
        .populate({path: 'fieldset_id', model: Fieldset})
        .populate({path: 'tags_id', model: Tag})
        res.status(200).json(items);
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch items.router : get'});
   }
})

router.get('/withtag', async (req, res) => {
    try {
        const tag_name = req.query.tag_name;
        const tag = await Tag.findOne({name: tag_name})
        const items = await Item.find({tags_id: {$in: [ tag._id ]}})
        .populate({path: 'tags_id', model: Tag})
        res.status(200).json({items: items});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch items.router : get'});
   }
})

router.get('/search', async (req, res) => {
    try {
        const search = req.query.search;
        const items = await Item.find({$text: {$search: search}})
        .populate({path: 'tags_id', model: Tag})
        // const colls = await Collection.find({$text: {$search: search}})
        // const comms = await Comment.find({$text: {$search: search}})
        // console.log('Search in Is = ', items.length);
        // console.log('Search in Cl = ', colls.length);
        // console.log('Search in Cm = ', comms.length);
        res.status(200).json({items: items});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch items.router : get'});
   }
})

router.post('/delete', async (req, res) => {
    try {
        const item_id = req.body.item_id
        const delItem = await Item.findByIdAndDelete(item_id)
        await FileCloudApi.remove(delItem.image_id)
        res.status(200).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops! Error in TryCatch users.router'});
    }
})

router.post('/like', async (req, res) => {
    try {
        const {user_id, item_id} = req.body;
        const item = await Item.findById(item_id);
        if (!item.like_list.includes(user_id)) {
            item.like_list.push(user_id)
            await item.save();
        }
        res.status(200).json({likes: item.likes});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch items.router : like'});
   }
})

module.exports = router;
