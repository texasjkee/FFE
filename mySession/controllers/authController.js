const userModel = require('../models/User');

const registration = async (req, res, next) => {
  const {username} = req.body;
  const found = await userModel.find({username});

  if (found.length) {
    return res.status(400).json({message: 'User with this name exists'});
  };

  try {
    await userModel.create(req.body);
    res.status(201).json({message: 'You are registered'});
  } catch (error) {
    console.log(error);
    next(error);
  };
};

const login = async (req, res, next) => {
  const {username, password} = req.body;

  try {
    const found = await userModel.find({username: req.body.username});
    const {username: userName, password: userPassword, _id} = found[0] ? 
      found[0] : [{username: null, password: null, _id: null}];
    
    if (username === userName && password === userPassword) {
      req.session.userId = _id;
      return res.status(200).json({message: 'Welcome'});
    } else {
      return res.status(400).json({message: `Wrong password  or login entered`});
    };
  } catch (error) {
    console.log(error);
    next(error);
  };
};

module.exports = {registration, login};