const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const {secret} = require('../config'); 
const jwt = require('jsonwebtoken');

const genereteAccessToken = (id, roles) => {
  const payload = {id, roles};
  return jwt.sign(payload, secret, {expiresIn: "24h"});
};

class authController {
  async registration (req, res) {
    try {
      const errors = validationResult(req)

      if(!errors.isEmpty()) {
        return res.status(400).json({message: 'Error registration', errors})
      };

      const {username, password} = req.body;
      const candidate = await User.findOne({username})

      if (candidate) {
        return res.status(400).json({message: 'User with this name exists'})
      };

      const hashPassword = bcrypt.hashSync(password, 5);
      const userRole = await Role.findOne({value: "USER"});
      const user = new User({username, password: hashPassword, role: [userRole.value]});
      await user.save();

      return res.json({message: 'User has successfully registred'}) 
    } catch (error) {
      console.log(error);  
      res.status(400).json({message: 'Registration error'})
    };
  };

  async login (req, res) {
    try {
      const {username, password} = req.body;
      const user = await User.findOne({username});

      if(!user) {
        return res.status(400).json({message: `User with this ${username} not found`});
      }
      const validPassword = bcrypt.compareSync(password, user.password);

      if(!validPassword) {
        return res.status(400).json({message: `Wrong password entered`});
      };
      const token = genereteAccessToken(user._id, user.roles);
      return res.json({token});
    } catch (error) {
      console.log(error);  
      res.status(400).json({message: 'Login error'})
    };
  };

  async getUsers (req, res) {
    try {
      const userRole = new Role();
      const adminRole = new Role( {value: 'ADMIN'})

      await userRole.save();
      await adminRole.save();

      res.json('server work');
    } catch (error) {
      
    };
  };
};

module.exports = new authController();