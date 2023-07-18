const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username: {type: String, required: true},
  email: {type: String, reuired: true, unique: true},
  password: {type: String, required: true},
});

module.export = mongoose.model('User', userSchema);