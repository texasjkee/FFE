const {Router} = require('express');
const route = Router();

const auth = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

route.get('/login', auth, (req, res, next) => {
  const result = userController('to', 'strong');

  if(result.status === 'ok') {
    const userID = result.payload.userID;
    req.session.userID = userID;
    res.json({status: 'ok', payload: {userID}});
  };
});
route.post('/registration', userController.registration);
route.post('/authorization', userController.authorization);

module.exports = route;