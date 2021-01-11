var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TagSchema = new Schema(
    {
        name: {type: String, required: true, max: 32}
    }
);

TagSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
    const self = this
    self.findOne(condition, (err, result) => {
        return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
    })
}

module.exports = mongoose.model('Tag', TagSchema);
