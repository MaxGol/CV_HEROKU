var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CVSchema = new Schema({
  basicinfo: {},
  bio: {},
  experience: {}
});

module.exports = mongoose.model('CVdata', CVSchema);
