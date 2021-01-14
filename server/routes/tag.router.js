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

module.exports = router;
