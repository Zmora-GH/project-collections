const {Router} = require('express');
const User = require('../models/User');
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');

const router = Router();

router.post('/google_signin', async (req, res) => {
    try {
        const {name, email, googleId} = req.body.googleProfileObj;
        const tmpUser = await User.findOne({username: name});
        if (tmpUser) {
            const token = jsonwebtoken.sign({userId: tmpUser._id}, process.env.SECRET, {expiresIn: '1h'});
            res.status(200).json({token: token, user: tmpUser})
        } else {
            const pass = crypto.createHash('md5').update(googleId).digest("hex");
            const user = await User.create({
                username: name,
                email: email,
                password: pass });
            const token = jsonwebtoken.sign({userId: user._id}, process.env.SECRET, {expiresIn: '1h'});
            res.status(200).json({token: token, user: user})
        }
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch auth.router : signup'});
   }
})

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const tmpUser = await User.findOne({username: username});
        if (tmpUser) {return res.status(400).json({message: "This username already exists"})}
        const pass = crypto.createHash('md5').update(password).digest("hex");
        const user = await User.create({ username, email, password: pass });
        res.status(201).json({ message: 'User Created' });
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch auth.router : signup'});
   }
})

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const tmpUser = await User.findOne({username: username}).exec();
        if (!tmpUser) {return res.status(400)}
        const pass = crypto.createHash('md5').update(password).digest("hex");
        if (!(pass === tmpUser.password)) {return res.status(400)}
        const token = jsonwebtoken.sign({userId: tmpUser.id}, process.env.SECRET, {expiresIn: '1h'});
        res.status(200).json({token: token, user: tmpUser})
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch auth.router : signin'});
   }
})

module.exports = router;
