const express = require('express');
const route = express.Router();

const dataBase = [];

route.post('/posts?', (req, res) => {
  if(req.body.params.title) {
    dataBase.push(req.body.params);

    console.log(dataBase);
    const foundPost = dataBase.find(post => post.title === req.body.params.title);

    res.json({message: foundPost})
  }
})

module.exports = route;