const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    // cb(null, new Date().toISOString() + '-' + file.originalname)
    // cb(null, Date.now() + path.extname(file.originalname))
    cb(null, file.originalname + '-' + Date.now());
  }
});

// const limits = {
//   fileSize:
// }

// const fileFilter = (req, rile, cb) => {
//   if(file.minetype === 'image/png' || 'image/jep) {

//   }
// }

module.exports = multer({ storage });