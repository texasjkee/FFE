const {Router} = require('express');
const route = Router();

const authController = require('../../controllers/auth/strategies/localController');
const isAuthMiddleware = require('../../middleware/isAuth');

// route.post('/registration', authController.registration);
// route.post('/login', authController.login);
// route.post('/logout', authController.logout);
// route.get('/dashboard', isAuthMiddleware, (req, res) => {
//   res.send('dashboard');
// });

module.exports = route;