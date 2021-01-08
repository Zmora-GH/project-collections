var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TagSchema = new Schema(
    {
        name: {type: String, required: true, max: 32}
    }
);

module.exports = mongoose.model('Tag', TagSchema);
