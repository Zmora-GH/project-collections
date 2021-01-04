const {Router} = require('express');
const User = require('../models/User');
//const Collection = require('../models/Collection');

const router = Router();

router.post('/', async (req, res) => {
    try {
        const username = req.body.username;
        const user = await User.findOne({username: username});

        res.status(201).json({'userdata': user, 'collections': [1,2,3]});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch profile.router : get /'});
   }
})

router.post('/collections', async (req, res) => {
    try {
        const username = req.body.username;
        // TODO СДЕЛАТЬ КОЛЛЕКЦИИ
        // const user = await Collection.find({username: username});
        res.status(201).json([null,null]);
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch profile.router : get /'});
   }
})

module.exports = router;
