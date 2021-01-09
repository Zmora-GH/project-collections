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

const fs = require('fs');

router.post('/add', async (req, res) => {
    try {
        const {name, fields, coll_id, tags, scheme} = req.body;
        let tagIds = [];
        for (var i = 0; i < tags.length; i++) {
            let tag = await Tag.updateOne({name: tags[i]}, {name: tags[i]}, {upsert: true});
            tagIds.push(tag._id);
        }
        const tempfields = fields.map((field, i) => { if (scheme[i]) { return {name: scheme[i], value: field}}})
        const fset = await Fieldset.create({fields: tempfields})
        const item = await Item.create({
            fieldset_id: fset._id,
            collection_id: coll_id,
            tags_id: tagIds,
            name: name
        })
        res.status(201).json({item_id: item._id});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : add'});
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
        res.status(201).json({coll_id: coll._id});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : create'});
   }
})

router.post('/scheme', async (req, res) => {
    try {
        const {coll_id} = req.body
        const coll = await Collection.findOne({_id: coll_id});
        res.status(200).json(coll.field_mask);
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : scheme'});
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
            const filePath = `/${entity}/${Date.now()}.${img.originalname.split('.').pop()}`
            fs.appendFileSync(`${storage}${filePath}`, img.buffer)
            const temp = await Collection.findOneAndUpdate({_id: coll_id}, {image_url: filePath})
        } else if (item_id) {
            const entity = 'items'
            const filePath = `/${entity}/${Date.now()}.${img.originalname.split('.').pop()}`
            fs.appendFileSync(`${storage}${filePath}`, img.buffer)
            const temp = await Collection.findOneAndUpdate({_id: coll_id}, {image_url: filePath})
        }
        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : image'});
   }
})

module.exports = router;
