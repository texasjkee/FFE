const {Router} = require('express');
const route = Router();

const authController = require('../controllers/authController');

route.get('/login', async (req, res) => {
  //? What is the difference? 
  // req.session.isAuth = true;
  req.session.isAunthenticated = true;
  res.send('Hello');
  //? What is this? 
  // res.redirect('/');
});

route.post('/registration', authController.registration);
route.post('/login', authController.login);

module.exports = route;