var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new Schema(
    {
        fieldset_id: {type: Schema.Types.ObjectId, ref: 'Fieldset' },
        collection_id: {type: Schema.Types.ObjectId, ref: 'Collection'},
        tags_id: [{type: Schema.Types.ObjectId, ref: 'Tag'}],
        name: {type: String, required: true, text : true},
        image_url: String,
        created: {type: Date, default: Date.now},
        like_list: [{type: Schema.Types.ObjectId, ref: 'User'}],
        comment: {type: Schema.Types.ObjectId, ref: 'Comment' },
    }
);

ItemSchema.virtual('likes').get(function () {
  return this.like_list.length;
});

module.exports = mongoose.model('Item', ItemSchema);
// индексация субдокуметов и проч
