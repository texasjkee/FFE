const { Router } = require('express');
const route = Router();

const controller = require('../controller/viewArticle');

route.post('/viewArticle', (req, res) => {
  const reqTitle = req.body.articleTitle;
  const switcher = req.body.switcher;

  const defaultArticle = controller.getArticle();
  const article = controller.switchArticle(reqTitle, switcher);

  res.json({
    status: 200,
    payload: defaultArticle
  });

  if (article) {
    console.log(article, 'result');
    res.json({
      status: 200,
      payload: article
    });
  } else {
    res.json({
      status: 500
    });
  }
})

module.exports = route;