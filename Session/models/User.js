const {Schema, model} = require('mongoose');

const userSchema = Schema({
  profile: {
    username: {type: String},
    contacts: [
      {
        kind: 
          { 
            type: String,
            enum: ['email', 'phone', 'google']
          },
        content: {type: String}
      },
    ],
  },
    email: {type: String}
  }, {timestamps: true});

module.exports = model('User', userSchema);