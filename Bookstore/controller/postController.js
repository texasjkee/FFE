const postModel = require('../models/Posts');

exports.getPostById = async (req, res, next) => {
    const id = req.params.id;

    try{
        const post = await postModel.findOne({_id: id});
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getAllPosts = async (req, res, next) => {
    try{
        const posts = await postModel.find({})
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getAllComments = async (req, res, next) => {
    const id = req.params.id;

    try{
        const comments = await postModel.findOne({_id: id}, 'comments');
        res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.getCurrentComment = async (req, res, next) => {
    const id = req.params.id;
    const { index } = req.query;

    try{
        const posts = await postModel.findOne({_id: id}, 'comments');
        const currentComment = posts.comments.at(index);
        res.status(200).json(currentComment);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.createNewPost = async (req, res, next) => {
    try {
        await postModel.create(req.body);
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.addComment = async (req, res, next) => {
    const {id, body } = req.body;

    try {
        await postModel.findByIdAndUpdate(
           { _id: id},
           { $push: { comments: body } }
        )
        res.status(201).json(req.body);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

exports.addReplyComment = async (req, res, next) => {
    console.log('repleyComment')

    try {
        const posts = await postModel.aggregate([
            {
              $project:
               { 
                  comment: { $arrayElemAt: [ "$comments", 0 ] }
               }
            }
         ]).limit(1)
        res.status(201).json(posts);
    } catch (error) {
        console.log(error);
        next(error);
    };
};