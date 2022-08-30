const { generateToken } = require('./jwtService');
const { User } = require('../database/models');

const login = async ({ email, password }) => {
    const result = await User.findOne({ where: { email, password } });
    if (result === null) {
       return result;
    }
     const token = generateToken(result.displayName);
    return token;
};

const registerUser = async ({ displayName, email, password, image }) => {
    const ifExist = await User.findOne({ where: { email } });
    if (ifExist === null) {
     await User.create({ displayName, email, password, image });
     const token = generateToken(displayName);
       return token;
    } 
        return false;
};

const getAll = async () => {
  const result = await User.findAll(); 
  const newOjb = result.map(({ id, displayName, email, image }) => 
  ({ id, displayName, email, image }));
  return newOjb;
};

const getById = async ({ id }) => {
 try {
    const result = await User.findByPk(id);
    delete result.dataValues.password;
   return result;
 } catch (e) {
    return false;
 }
};

module.exports = { login, registerUser, getAll, getById };