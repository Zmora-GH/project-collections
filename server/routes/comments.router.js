const {Router} = require('express');
const Comment = require('../models/Comment');

const router = Router();

router.get('/', async (req, res) => {
    try {
        // params
        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch comment.router : /'});
   }
})

module.exports = router;
