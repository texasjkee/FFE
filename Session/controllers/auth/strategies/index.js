const localStrategy = require('./localController');
const googleStrategy = require('./googleController');
const userStrategy = require('./userController');

module.exports = {googleStrategy, localStrategy, userStrategy};