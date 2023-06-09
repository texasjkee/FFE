const mongoose = require('mongoose');

const article = mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    authorId: { type: String, required: true },
});

const articleSchema = mongoose.model('Article', article);

module.exports = articleSchema;