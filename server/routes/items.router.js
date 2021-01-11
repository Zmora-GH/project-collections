const {Router} = require('express');
const Item = require('../models/Item');
const Tag = require('../models/Tag');
const Fieldset = require('../models/Fieldset');

const router = Router();

router.get('/last', async (req, res) => {
    try {
        // LAST 3 ITEMS
        res.status(200).json({});
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

router.post('/like', async (req, res) => {
    try {
        res.status(200).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch items.router : like'});
   }
})

module.exports = router;
