const { Schema, Types, model} = require('mongoose'); 

const book = Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    authors: { type: Types.ObjectId, ref: "author"},
});

const bookModel = model('Book', book);

module.exports = bookModel;