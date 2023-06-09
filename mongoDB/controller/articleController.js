const articleModel = require('../models/Articles');

exports.createNewArticle = async (req, res, next) => {
    try {
        await articleModel.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getAllArticles = async (req, res, next) => {
    try{
        const authors = await articleModel.find({});
        console.log(authors);
        res.status(200).json(authors);
    } catch (error) {
        console.log(error);
        next(error);
    };
};