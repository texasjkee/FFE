const { Router } = require('express');
const router = Router();

const authorController = require('../controller/authorController');

router.route('/author').post(authorController.createNewAuthor);
router.route('/author').get(authorController.getFirstAuthor);
router.route('/author/:id').get(authorController.getAuthorById);
router.route('/authors').get(authorController.getAllAuthors);

module.exports = router;