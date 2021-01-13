var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
    {
        user: {type: Schema.Types.ObjectId, ref: 'User' },
        item: {type: Schema.Types.ObjectId, ref: 'Item' },
        created: {type: Date, default: Date.now},
        text: {type: String}
    }
);

module.exports = mongoose.model('Comment', CommentSchema);
