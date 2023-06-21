const { Schema, model} = require('mongoose'); 

const post = Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    comments: [ {type: Array} ]
});

const postModel = model('Post', post);

module.exports = postModel;