const { Router } = require('express');
const router = Router();

const bookController = require('../controller/bookController');

router.route('/book').post(bookController.createNewBook);
router.route('/books').get(bookController.getAllBooks);

module.exports = router;