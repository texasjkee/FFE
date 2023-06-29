const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, './client/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

module.exports = multer({storage});