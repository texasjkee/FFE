const bcryptjs = require('bcryptjs');
const userModel = require('../models/User');

const registration = async (req, res) => {
  const {username, email, password} = req.body;
  let user = await userModel.findOne({email});
  
  if(user) {
    return res.redirect('/register');
  };
 
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

const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await userModel.findOne({email})
  
  if (!user) {
    // return res.redirect('/login');
    res.status(200).json({message: 'username or password is not correct'});
  };
 
  const isMatch = await bcryptjs.compare(password, user.password);
  
  if (!isMatch) {
    // return res.redirect('/login');
    res.status(200).json({message: 'username or password is not correct'});
  };
  
  // res.redirect('/dashboard');
  req.session.isAunthenticated = true;
  res.status(200).json({message: 'You are logged in'});
};

const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) throw err;
    // res.redirect('/');
  });
  res.status(200).json({message: 'You are logout'})
};

module.exports = {registration, login, logout};