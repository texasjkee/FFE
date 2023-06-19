const bookModel = require('../models/Books');

exports.getAllBooks = async (req, res, next) => {
    try{
        const authors = await bookModel.find({})
        res.status(200).json(authors);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.createNewBook = async (req, res, next) => {
    console.log(req.body);
    try {
        await bookModel.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};