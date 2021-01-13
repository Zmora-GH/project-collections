const {Router} = require('express');
const Comment = require('../models/Comment');
const User = require('../models/User');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const itemId = req.query.itemId;
        const comments = await Comment.find({item: itemId})
        .populate({path: 'user', model: User})
        res.status(200).json({comments: comments});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch comment.router : /'});
   }
})

router.post('/add', async (req, res) => {
    try {
        const {itemId, userId, text} = req.body;
        const comment = await Comment.create({
            user: userId,
            item: itemId,
            text: text
        })
        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch comment.router : /'});
   }
})

module.exports = router;
