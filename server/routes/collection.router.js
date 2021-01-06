const {Router} = require('express');
const Collection = require('../models/Collection');
// const Dropbox = require('dropbox')

const router = Router();

router.post('/create', async (req, res) => {
    try {
        // FILE - - -- - - >
        const {form, fields, userId} = req.body;

        const colectionData = {
            name: form.name,
            description: form.discription,
            theme: form.theme,
            image_url: " X X X X X X X X ",
            user_id: userId,
            field_mask: fields
        }
        // await Collection.create()
        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : create'});
   }
})

router.post('/scheme', async (req, res) => {
    try {
        const collectionId = req.body
        // const coll = await Collection.findOne() ----- coll.field_mask

        res.status(201).json({});
   } catch (err) {
       console.log(err);
       res.status(500).json({message: 'Oops! Error in TryCatch collections.router : scheme'});
   }
})

module.exports = router;













/*
form
{
    name: 'name111111',
    theme: '1',
    discription: 'disc1',
    files: [ { path: 'than.png' } ]
}
fields
[ 'num1','','','str1','','','','yexy1','','','','','','','bo1' ]
*/
