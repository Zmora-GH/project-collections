const {Router} = require('express');
const User = require('../models/User');

const router = Router();

router.get('/users', async (req, res) => {
    try {
        console.log('>>> ALL');
        const userList = await User.find({});
        console.log(userList, typeof(userList));
        res.json(userList);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops! Error in TryCatch users.router'});
    }
})
module.exports = router;
