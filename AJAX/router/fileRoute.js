const { Router } = require('express');
const upload = require('../middleware/fileMiddleware');

const route = Router();

route.post('/file', upload.single('file'), (req, res) => {

  res.end('File upload');
});

module.exports = route;