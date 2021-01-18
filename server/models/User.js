var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {type: String, required: true, max: 32, text: true},
        password: {type: String, required: true,},
        email: {type: String, required: true, max: 32},
        staff: {type: Boolean, default: false},
        status: {type: Boolean, default: false},
        collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],
        created: {type: Date, default: Date.now},
        colormode: {type: String, default: "light", enum: ["light", "dark"]},
        lang: {type: String, default: "en", enum: ["en", "ru"]},
    }
);

module.exports = mongoose.model('User', UserSchema);
