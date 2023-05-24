const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, file.originalname + '-' + Date.now());
  }
});

const limits = {
  fileSize: 4000
}

const fileFilter = (req, file, cb) => {
  const txt = 'text/plain';

  if(file.mimetype === txt) {
    cb(null, true);
  } else {
    cb(null, false);
    //TO_DO: Error always blocks the thread;
    // cb(new Error(`This ${file.originalname} does not txt`))
  }
}

module.exports = multer({ storage , fileFilter});