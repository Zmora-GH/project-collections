const {Router} = require('express');
const User = require('../models/User');

const router = Router();

router.get('/users', async (req, res) => {
    try {
        const userList = await User.find({});
        res.json(userList);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops! '});
    }
})

router.post('/block', async (req, res) => {
    try {
        const idArray = req.body
        idArray.forEach(async (id, index) => {await User.updateMany({'_id': {$in: idArray}}, {status: true})});
        res.status(201).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops! '});
    }
})

router.post('/unblock', async (req, res) => {
    try {
        const idArray = req.body
        idArray.forEach(async (id, index) => {await User.updateMany({'_id': {$in: idArray}}, {status: false})});
        res.status(201).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops! '});
    }
})

router.post('/delete', async (req, res) => {
    try {
        const idArray = req.body
        idArray.forEach(async (id, index) => {await User.deleteMany({'_id': {$in: idArray} })});
        res.status(201).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops! '});
    }
})

router.post('/assign', async (req, res) => {
    try {
        const idArray = req.body
        idArray.forEach(async (id, index) => {await User.updateMany({'_id': {$in: idArray}}, {staff: true})});
        res.status(201).json({});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops! '});
    }
})

module.exports = router;
