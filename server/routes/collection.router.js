const {Router} = require('express');
//const Collection = require('../models/Collection');

const router = Router();

router.post('/create', async (req, res) => {
    try {
        // TODO: Создание коллекции, схемы полей, загрузка изображения на dropbox
        console.log('COLLECTION CREATE');
        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : create'});
   }
})

module.exports = router;
