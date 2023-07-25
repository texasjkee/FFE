module.exports = (req, res, next) => {
  if(!req.session.isAuthenticated) {
    return res.redirect('/auth/login');
  };
  
  next();
  
  //or 
  // if(req.session.isAuthenticated) {
  //   next();
  // } else {
  //   res.redirect('/login');
  // };
};