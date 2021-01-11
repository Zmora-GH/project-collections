const {Router} = require('express');
const User = require('../models/User');
const Collection = require('../models/Collection');
const Theme = require('../models/Theme');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const username = req.body.username;
        const user = await User.findOne({username: username});
        const colls = await Collection.find({user_id: user._id});
        res.status(201).json({'userdata': user, 'collections': colls.map(coll=>{return coll.toJSON()})});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch profile.router : post /'});
   }
})

module.exports = router;
