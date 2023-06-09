const { Router } = require('express');
const router = Router();

const authorController = require('../controller/authorController');

router.route('/author').post(authorController.createNewAuthor);
router.route('/authors').get(authorController.getAllAuthors);
router.route('/author/:id').get(authorController.getAuthorById);

module.exports = router;