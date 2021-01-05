var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        fieldset_id: {type: Schema.Types.ObjectId, ref: 'Fieldset' },
        collection_id: {type: Schema.Types.ObjectId, ref: 'Collection'},
        name: {type: String, required: true},
        created: {type: Date, default: Date.now},
        like_list: [{type: Schema.Types.ObjectId, ref: 'User'}],
    }
);

ItemSchema.virtual('likes').get(function () {
  return this.like_list.length;
});

module.exports = mongoose.model('Item', ItemSchema);
