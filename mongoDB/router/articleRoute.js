const express = require('express');
const router = express.Router();

const articleController = require('../controller/articleController');

router.route('/article').post(articleController.createNewArticle);
router.route('/articles').get(articleController.getAllArticles);

module.exports = router;