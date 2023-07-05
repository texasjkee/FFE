const {model, Schema} = require('mongoose');

const user = new Schema({
  username: {type: String, unique: true, require: true},
  password: {type: String, unique: true, require: true},
  roles: [{type: String, ref: 'Role'}]
});

module.exports = model('User', user);