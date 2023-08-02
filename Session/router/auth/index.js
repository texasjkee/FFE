const {Router} = require('express');
const router = Router();

const localRoute = require('./localRouter');
// const googleRoute = require('./googleRouter');

router.use('/local', localRoute);

module.exports = router;