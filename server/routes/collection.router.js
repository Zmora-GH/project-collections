const {Router} = require('express');
const Collection = require('../models/Collection');
const User = require('../models/User');
const multer  = require("multer");
const path = require('path');

const router = Router();
const upload = multer()

const fs = require('fs');

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
        const collectionId = req.body
        const coll = await Collection.findOne({_id: collectionId});
        res.status(200).json(coll.field_mask);
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : scheme'});
   }
})

router.post('/image', upload.any(), async (req, res) => {
    try {

        const coll_id = req.body.id
        const img = req.files[0]
        const storage = "./server/storage"
        const filePath = `/collections/${Date.now()}.${img.originalname.split('.').pop()}`
        fs.appendFileSync(`${storage}${filePath}`, img.buffer)
        const temp = await Collection.findOneAndUpdate({_id: coll_id}, {image_url: filePath})
        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : image'});
   }
})

module.exports = router;













/*
form
{
    name: 'name111111',
    theme: '1',
    discription: 'disc1',
    files: [ { path: 'than.png' } ]
}
fields
[ 'num1','','','str1','','','','yexy1','','','','','','','bo1' ]
*/
