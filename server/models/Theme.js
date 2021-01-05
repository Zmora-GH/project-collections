var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ThemeSchema = new Schema(
    {
        name: {type: String, required: true, max: 32}
    }
);

module.exports = mongoose.model('Theme', ThemeSchema);
