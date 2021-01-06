const {Router} = require('express');
// TAG

const router = Router();

router.get('/', async (req, res) => {
    try {
        // TAG
        res.status(200).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch tag.router : get /'});
   }
})


module.exports = router;
