const authorModel = require('../models/Authors');
const bookModel = require('../models/Books');

exports.getAllAuthors = async (req, res, next) => {
    try{
        const authors = await authorModel.find({});
        res.status(200).json(authors);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.createNewAuthor = async (req, res, next) => {
    try {
        await authorModel.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getAuthorById = async (req, res, next) => {
    try {
        await authorModel.find({_id: req.params.id}).populate();
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};