const mongoose = require('mongoose');

const author = mongoose.Schema({
    name: { type: String, required: true },
});

const authorModel = mongoose.model('Author', author);

module.exports = authorModel;