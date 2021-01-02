const {Router} = require('express');
const User = require('../models/User');
const crypto = require('crypto');
const jsonwebtoken = require('jsonwebtoken');

const router = Router();

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
        res.status(201).json({ token, id: tmpUser.id, status: tmpUser.status, staff: tmpUser.staff, username: tmpUser.username})
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch auth.router : signin'});
   }
})

module.exports = router;
