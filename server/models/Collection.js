var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CollectionSchema = new Schema(
    {
        name: {type: String, required: true, max: 100},
        description: {type: String, required: true, max: 255},
        theme: {type: String,
            required: true,
            enum: [
                'Alcohol',
                'Books',
                'Coins',
                'Other',
                'Stamps'],
            default: 'Other'},
        image_url: {type: String},
        items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
        user_id: {type: Schema.Types.ObjectId, ref: 'User' },
        fieldset_id: {type: Schema.Types.ObjectId, ref: 'Fieldset' },
        created: {type: Date, default: Date.now},
    }
);

module.exports = mongoose.model('Collection', CollectionSchema);
