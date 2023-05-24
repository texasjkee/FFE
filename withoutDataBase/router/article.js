const express = require('express');
const route = express.Router();

const controller = require('../controller/article');

//TO_DO: doesn't work GET method;
route.post('/article', (req, res) => {
  const arcticle = req.body.article;
  const authors = controller.getAthours();

  controller.addArticle(arcticle);

  if (authors) {
    res.json({ status: STATUS.OK, payload: authors });
  } else { 
    res.json({ status: STATUS.BAD_REQUEST });
  }
})

module.exports = route;