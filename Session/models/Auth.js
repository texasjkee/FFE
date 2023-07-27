const {Schema, model} = require('mongoose');

const authSchema = Schema({
  provider: {
    type: Schema.Types.String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  authData: {
    type: Schema.Types.Mixed
  }
}, {timestamps: true});

module.exports = model('Auth', authSchema);