const {Router} = require('express');
const route = Router();

const localStrategy = require('../../controllers/auth/strategies').localStrategy;
const isAuthMiddleware = require('../../middleware/isAuth');

route.post('/registration', localStrategy.registration);
route.post('/login', localStrategy.login);
route.post('/logout', localStrategy.logout);

//? extract to separate route
route.get('/dashboard', isAuthMiddleware, (req, res) => {
  // res.render('dashboard');
});

module.exports = route;