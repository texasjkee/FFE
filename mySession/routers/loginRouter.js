const {Router} = require('express');
const route = Router();

const auth = require('../middleware/authMiddleware');
const login = require('../controllers/loginController');

route.get('/login', auth, (req, res, next) => {
  const result = login('to', 'strong');

  if(result.status === 'ok') {
    const userID = result.payload.userID;
    req.session.userID = userID;
    res.json({status: 'ok', payload: {userID}});
  };
});

route.get('/get', auth, (req, res, next) => {
  res.status(200).json({message: req.session.userID});
});
route.get('/test', auth, (req, res, next) => {
  res.status(200).json({message: req.session.userID});
});

module.exports = route;