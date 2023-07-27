const {Router} = require('express');
const route = Router();

const googleController = require('../../controllers/auth/strategies/googleController');

route.post('/login', googleController.login);
route.post('/logout', googleController.logout);

module.exports = route;