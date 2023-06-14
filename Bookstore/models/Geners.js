const mongoose = require('mongoose');

const gener = mongoose.Schema({
    name: { type: String, required: true },
});

const generModel = mongoose.model('Gener', gener);

module.exports = generModel;