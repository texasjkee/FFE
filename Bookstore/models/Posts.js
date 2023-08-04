const { Schema, model, Types} = require('mongoose'); 

// const post = Schema({
//     title: { type: String, required: true },
//     body: { type: String, required: true },
//     comments: [ {type: Object} ]
// });

const post = Schema ({
    // _id: {type: Types.ObjectId},
    title: {type: String},
    body: {type: String},
    likes: {type: Number, default: 0},
    comments: [ 
        { 
            // _id: {type: Types.ObjectId},
            author: {type: String},
            body: {type: String},
            retryComments: [
                {
                    // id: {type: Types.ObjectId},
                    author: {type: String},
                    body: {type: String},
                }
            ]
        }   
    ] 
})

const postModel = model('Post', post);

module.exports = postModel;