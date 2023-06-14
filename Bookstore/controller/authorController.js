const authorModel = require('../models/Authors');

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
    console.log(req.params.id);
    try {
        await authorModel.find({_id: req.params.id}).populate([{ path: 'book', strictPopulate: false }]);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};