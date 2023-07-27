const UserModel = require('../../../models/User');

const checkUsername = async (login) => {
  return await UserModel.findOne({'profile.username': login}, ['_id']);
  //? What is this for? 
  // return !!result;
};

const createUser = async login => {
  const foundUsername = await checkUsername(login);
  if (foundUsername) {
    return {status: 'fail', payload: {message: 'This username exists'}};
  };
  
  const data = new UserModel();

  data.profile = {username: login};

  await data.save();

  const profile = {...data.profile};
  return {status: 'ok', payload: {id: data.id, profile}};
};

module.exports = {createUser};