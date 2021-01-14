var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ThemeSchema = new Schema(
    {
        name: {type: String, required: true, max: 32, text: true}
    }
);

module.exports = mongoose.model('Theme', ThemeSchema);
