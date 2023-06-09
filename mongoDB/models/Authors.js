const mongoose = require('mongoose');

const author = mongoose.Schema({
    name: { type: String, required: true },
});

const authorSchema = mongoose.model('Author', author);

module.exports = authorSchema;