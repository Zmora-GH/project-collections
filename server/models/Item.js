var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: {type: String, required: true, max: 100},
        collection: {type: Schema.Types.ObjectId, ref: 'Collection'},
        created: {type: Date, default: Date.now},
        likes: {type: Number, default: 0},
        like_list: [{type: Schema.Types.ObjectId, ref: 'User'}],
    }
);

module.exports = mongoose.model('Item', ItemSchema);
