const {Router} = require('express');
const Collection = require('../models/Collection');
// const Dropbox = require('dropbox')

const router = Router();

router.post('/create', async (req, res) => {
    try {
        // const dropbox = new Dropbox({ accessToken: process.env.ACCESSTOKEN });
        // dropbox.filesUpload({path: '/' + file.name, contents: file})
        // .then(function(response) {
        //     var results = document.getElementById('results');
        //     var br = document.createElement("br");
        //     results.appendChild(document.createTextNode('File uploaded!'));
        //     results.appendChild(br);
        //     console.log(response);
        // })
        // .catch(function(error) {
        //     console.error(error);
        // });
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
