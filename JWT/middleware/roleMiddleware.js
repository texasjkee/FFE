const jwt = require("jsonwebtoken");
const {secret} = require("../config");

module.exports = (roles) => {
  return (req, res, next) => {
    if(req.method === 'OPTIONS') {
      next();
    };
    
    try {
      const token = req.headers.authorization.split('')[1];
      if(!token) {
        return res.status(403).json({message: 'User not registered'})
      }
      const {roles: userRoles} = jwt.verify(token, secret);
      let hasRole = false;
      userRoles.forEach(role => {
        if(role.includes(role)) {
          hasRole = true;
        };
      });
      if(!hasRole) {
        return res.status(403).json({message: 'You have no permission to access'});
      }
      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({message: 'User not registered'})
    };
  };
};