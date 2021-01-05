var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FieldsetSchema = new Schema(
    {
        item_id: {type: Schema.Types.ObjectId, ref: 'Item' },
        fields: [
            { name: String, value: Number },
            { name: String, value: Number },
            { name: String, value: Number },
            { name: String, value: String },
            { name: String, value: String },
            { name: String, value: String },
            { name: String, value: String },
            { name: String, value: String },
            { name: String, value: String },
            { name: String, value: Date },
            { name: String, value: Date },
            { name: String, value: Date },
            { name: String, value: Boolean },
            { name: String, value: Boolean },
            { name: String, value: Boolean },
        ]
    }
);

module.exports = mongoose.model('Fieldset', FieldsetSchema);
