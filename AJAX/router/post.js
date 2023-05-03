const express = require('express');
const route = express.Router();

const dataBase = [];

route.post('/posts?', (req, res) => {
  const postValue = req.body.post;

  if(postValue?.title) {
    dataBase.push(req.body.post);
    //TO_DO: 2 similar titles;??? 
    const foundPost = dataBase.find(post => post.title === req.body.post.title);

    res.json({message: foundPost});
  }
})

route.post('/filter?', (req, res) => {
  const filterValue = req.body.filter;
  const foundPostByHashtag = dataBase.find(post => post.hashtag === filterValue);

  res.json({message: foundPostByHashtag});
})

module.exports = route;