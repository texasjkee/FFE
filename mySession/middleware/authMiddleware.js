const auth = (req, res, next) => {
  //? if you don't write the next, tread are going to block;
  if(!req.session.userID || !req.session) {
    const err = new Error('You shall not pass');
    return next(err);
  };
  next();
};

module.exports = auth;