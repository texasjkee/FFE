const {Schema, model} = require('mongoose');

const user = Schema(
  {
    username: {type: String, require: true},
    password: {type: String, require: true},
    roles: [{type: String, default: 'USER'}]
  },
  { timestamps: true}
);

module.exports = model('User', user);