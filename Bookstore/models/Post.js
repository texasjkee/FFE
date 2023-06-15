const { Schema, Types, model} = require('mongoose'); 

const post = Schema({
    name: { type: String, required: true },
    books: { type: Types.ObjectId, ref: "Book"},
});

const postModel = model('Post', post);

module.exports = postModel;