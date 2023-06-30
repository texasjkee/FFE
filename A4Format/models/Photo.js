const {Schema, model}  = require('mongoose');

const photo = Schema({
  imageName: {type: String},
  originalName: {type: String},
  format: {type: String, required: true},
  quantity: {type: Number},
  created: {type: Date},
});

module.exports = model('Photo', photo);