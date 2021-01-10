const {Router} = require('express');

const router = Router();

router.get('/last', async (req, res) => {
    try {
        // LAST 3 ITEMS
        res.status(200).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch items.router : getlast'});
   }
})

module.exports = router;
