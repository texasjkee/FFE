const { Schema, Types, model} = require('mongoose'); 

const book = Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    authors: { type: Types.ObjectId, ref: "Author"},
});

const bookModel = model('Book', book);

module.exports = bookModel;