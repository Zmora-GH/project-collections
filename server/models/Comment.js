var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema(
    {
        user_id: {type: Schema.Types.ObjectId, ref: 'User' },
        created: {type: Date, default: Date.now},
        message: {type: String}
    }
);

module.exports = mongoose.model('Comment', CommentSchema);
