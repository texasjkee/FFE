const {Router} = require('express');
const router = Router();

const localRoute = require('./locla');
const googleRoute = require('./local');

router.use('./local, localRoute');
router.use('./local, googleRoute');