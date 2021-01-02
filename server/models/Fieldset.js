var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FieldsetSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        collection_id: {type: Schema.Types.ObjectId, ref: 'Collection' },

    }
);

module.exports = mongoose.model('Fieldset', FieldsetSchema);
