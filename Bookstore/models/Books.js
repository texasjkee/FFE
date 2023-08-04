const { Schema, Types, model} = require('mongoose'); 

const book = Schema({
    title: String,
    desc: String,
    authors: [{ type: Types.ObjectId, ref: "Author"}],
});

const bookModel = model('Book', book);

module.exports = bookModel;