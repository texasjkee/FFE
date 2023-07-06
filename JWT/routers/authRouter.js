const Router = require('express');
const router = new Router();
const {check} = require('express-validator');
const controller = require('../controllers/authControllers');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/registration', [
  check('username', `Usersname cannot be empty`).notEmpty(),
  check('password', `Password cannot be less than 4 `).isLength({min: 4, max: 10})
], controller.registration);
router.post('/login', controller.login);
// router.get('/users', authMiddleware, controller.getUsers);
router.get('/users', roleMiddleware(['USER', 'ADMIN']), controller.getUsers);

module.exports = router;