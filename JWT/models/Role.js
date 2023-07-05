const {model, Schema} = require('mongoose');

const role = new Schema({
  value: {type: String, unique: true, default: "USER"},
});

module.exports = model('Role', role);