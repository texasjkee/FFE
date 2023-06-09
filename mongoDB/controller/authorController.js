const authorModel = require('../models/Authors');

exports.createNewAuthor = async (req, res, next) => {
    try {
        await authorModel.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getAllAuthors = async (req, res, next) => {
    try{
        const authors = await authorModel.find({});
        res.status(200).json(authors);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getAuthorById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const author = await authorModel.findById(id);
        res.status(200).json(author);
    } catch (error) {
        console.log(error);
        next(error);
    };
};
