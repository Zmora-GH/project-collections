const cloudinary = require('cloudinary');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

module.exports.upload = async function (file, folder, storage) {
    let result = {};
    filePath = `${storage}/${folder}/${Date.now()}.${file.originalname.split('.').pop()}`
    fs.appendFileSync(filePath, file.buffer);;
    await cloudinary.v2.uploader.upload(filePath, {folder: folder}, (err, res) => {
        if (!err) { result = {
            status: 1,
            public_id: res.public_id,
            url: res.url,
        }} else { result = {
            status: 0
        }}
    });
    fs.unlink(filePath, (err)=>{if (err) {console.log(err)} });
    return result;
}

module.exports.remove = async function (public_id) {
    await cloudinary.v2.uploader.destroy(public_id, function(err, res) {
        if (err) {
            console.log(err);
        }
    });
}
