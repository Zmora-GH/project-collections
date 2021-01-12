const {Router} = require('express');
const Tag = require('../models/Tag');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const tags = await Tag.find().sort('-name')
        res.status(200).json({tags: tags});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch tag.router : get /'});
   }
})

router.get('/sometag', async (req, res) => {
    try {
        // items with tags
        // const tag = await Tag.findOne()
        res.status(200).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch tag.router : get /some'});
   }
})

module.exports = router;
