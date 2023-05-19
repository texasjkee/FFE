const express = require('express');
const route = express.Router();

const authorsArray = require('../dataBase/authorsData');
const articlesArray = require('../dataBase/articlesData');

route.post('/article', (req, res) => {
  console.log('route article');
  const data = req.body.article;
  if (data) {
    articlesArray.push(data);    
  }

  res.json({message: authorsArray});
})

module.exports = route;