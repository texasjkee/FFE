const {Schema, model} = require('mongoose');

const heroSchema = Schema({
  name: {type: String},
  gander: {type: String},
  height: {type: String}
  }, 
  {timestamps: true}
  );

module.exports = model('Hero', heroSchema);