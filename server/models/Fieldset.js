var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FieldsetSchema = new Schema(
    {
        fields: [Object]
    }
);

module.exports = mongoose.model('Fieldset', FieldsetSchema);
