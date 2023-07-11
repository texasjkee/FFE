const auth = (req, res, next) => {
  //? if you don't write the next, tread are going to block;
  if(req.session.userID) {
    next();
    return;
  };
  next();
};

module.exports = auth;