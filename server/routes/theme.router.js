const {Router} = require('express');
const Theme = require('../models/Theme');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const themes = await Theme.find()
        res.status(201).json(themes.map((item)=>{ return item.name }));
   } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Oops!'});
   }
})

module.exports = router;
