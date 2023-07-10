const {Router} = require('express');
const route = Router();

route.post('/login', async (req, res) => {
  req.session.isAunthenticated = true;
  res.redirect('/');
});

module.exports = route;