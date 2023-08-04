const { Schema, Types, model} = require('mongoose'); 

const author = Schema({
    name: String,
    age: Number,
    books: { type: Types.ObjectId, ref: "Book"},
    role: { type: String, default: 'guitarist' },
    createdDate: {type: Date, default: Date}
});

const authorModel = model('Author', author);

module.exports = authorModel;