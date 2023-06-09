const express = require('express');
const route = express.Router();

route.post('/viewArticle', (req, res) => {
  console.log('route viewAritcle');
})

module.exports = route;