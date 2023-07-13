const {Router} = require('express');
const route = Router();

const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/authController');

// route.post('/registration', authMiddleware, authController.registration);
// route.post('/authorization', authMiddleware, authController.login);

route.post('/registration', authController.registration);
route.post('/authorization', authController.login);

module.exports = route;