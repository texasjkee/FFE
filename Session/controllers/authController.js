const bcryptjs = require('bcryptjs');
const userModel = require('../models/User');

const registration = async (req, res, next) => {
  const {username, email, password} = req.body;
  let user = await userModel.findOne({email});
  
  if(user) {
    return res.redirect('/register');
  }
 
  const hashedPsw = await bcryptjs.hash(password, 5);
  
  user = new userModel({ 
    username, 
    email, 
    password: hashedPsw 
  });
  
  await user.save();
  
  // res.redirect('/login');
  res.status(200).json({message: 'You are registerd'});
};

const login = (req, res, next) => {
  const {username, email, password} = req.body;
};

module.exports = {registration, login};