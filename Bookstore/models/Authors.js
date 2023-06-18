const { Schema, Types, model} = require('mongoose'); 

const author = Schema({
    name: { type: String, required: true },
    books: { type: Types.ObjectId, ref: "Book"},
});

const authorModel = model('Author', author);

module.exports = authorModel;