const express = require('express');
const route = express.Router();

const db = require('../dataBase/articlesData'); 

route.post('/viewArticle', (req, res) => {
  console.log('route viewAritcle');

  res.json({message: db});
})

module.exports = route;