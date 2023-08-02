const bcryptjs = require('bcryptjs');

const AuthModel = require('../../../models/Auth');
const userController = require('./userController');

const addStrategy = async (uId, authData) => {
  const hashedPwd = bcryptjs(authData.password, 5);
  
  const doc = new AuthModel();
  doc.user = uId;
  doc.provider = 'local';
  doc.authData = {...authData, password: hashedPwd};

  await doc.save();
  
  return doc.id;
};

const registration = async (req, res) => {

  const {username, email, password} = req.body;

  const auth = await AuthModel
    .findOne({provider: 'local', 'authData.username': username})
    .populate('User');
  
    if (!auth) {
      //TODO: return {status: 'ok', payload: {message: 'Invalid login'}}
      return res.status(301).json({message: 'Invalid login'});
    };

    if (auth.authData.password !== password) {
      //TODO: return {status: 'ok', payload: {message: 'Invalid login'}}
      return res.status(301).json({message: 'Invalid password'});
    };

  const hashPassword = await bcryptjs.hash(password, 5);
  
  const user = new AuthModel({
    authData:{
      username, 
      email, 
      password: hashPassword 
    } 
  });
  
  await user.save();
  
  //TODO: return {status: 'ok', payload: {message: 'Invalid login'}}
  res.status(201).json({message: 'You are registerd'});
};

const login = async (req, res) => {
  const {email, password} = req.body;

  const user = await AuthModel.findOne({email})
  
  if (!user) {
    res.status(200).json({message: 'username or password is not correct'});
  };
 
  const isMatch = await bcryptjs.compare(password, user.password);
  
  if (!isMatch) {
    res.status(200).json({message: 'username or password is not correct'});
  };
  
  req.session.isAunthenticated = true;
  //TODO: return {status: 'ok', payload: {message: 'Invalid login'}}
  res.status(200).json({message: 'You are logged in'});
};

const logout = (req, res) => {
  //TODO: req.session.isGuest = true;
  req.session.destroy(err => {
    if (err) throw err;
  });
  //TODO: return {status: 'ok', payload: {message: 'Invalid login'}}
  res.status(200).json({message: 'You are logout'})
};

module.exports = {registration, login, logout};