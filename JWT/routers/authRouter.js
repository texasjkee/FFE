const Router = require('express');
const router = new Router();
const {check} = require('express-validator');
const controller = require('../controllers/authControllers');

router.route('/registration', [
  check('username', `Usersname cannot be empty`).notEmpty(),
  check('password', `Password cannot be empty`).isLength({min: 4, max: 10})
]).post(controller.registration);
// router.get('/users', controller.getUsers);
// router.post('/login');

module.exports = router;