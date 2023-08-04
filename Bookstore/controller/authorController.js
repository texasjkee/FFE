const authorModel = require('../models/Authors');

exports.getAllAuthors = async (req, res, next) => {
    try{
        // const authors = await authorModel.find({age: {$gt : 20, $lt: 30}});
        const authors = await authorModel.aggregate([{$group: {total: {$sum: '$age'}}}])
        res.status(200).json(authors);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.createNewAuthor = async (req, res, next) => {
    try {
        res.status(201).json(req.body);
        await authorModel.create(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getAuthorById = async (req, res, next) => {
    try {
        const author = await authorModel.find({_id: req.params.id});

        res.status(200).json(author);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getFirstAuthor= async (req, res, next) => {
    try {
        const authors = await authorModel.
        aggregate([
            { $lookup:
                {
                   from: "book",
                   localField: "name",
                   foreignField: "title",
                   as: "allBooks"
                }
            }
        ])
        res.status(200).json(authors);
    } catch (error) {
        console.log(error);
        next(error);
    };
};