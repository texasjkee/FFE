const {Router} = require('express');
const route = Router();

const user = require('../../controllers/auth/strategies/userController');

route.post('/user/create', user.createUser);

module.exports = route;