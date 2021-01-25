const {Router} = require('express');
const User = require('../models/User');
const Collection = require('../models/Collection');
const Theme = require('../models/Theme');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const username = req.query.username;
        const user = await User.findOne({username: username}).populate({path: 'collections', model: Collection})
        const colls = await Collection.find({user_id: user._id})
        res.status(201).json({'userdata': user, 'collections': colls.map(coll=>{return coll.toJSON()})});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch profile.router : post /'});
   }
})

router.post('/colormode', async (req, res) => {
    try {
        const {userId, colormode} = req.body;
        await User.findByIdAndUpdate(userId, {colormode: colormode === 'dark' ? 'light' : 'dark'})
        res.status(200).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch profile.router : colormode /'});
   }
})

router.post('/lang', async (req, res) => {
    try {
        const {userId, lang} = req.body;
        await User.findByIdAndUpdate(userId, {lang: lang})
        res.status(200).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch profile.router : lang /'});
   }
})

module.exports = router;
