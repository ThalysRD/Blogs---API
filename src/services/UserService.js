const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const secret = 'secretJWT';

const login = async ({ email, password }) => {
    const result = await User.findOne({ where: { email, password } });
    if (result === null) {
       return result;
    }
     const token = jwt.sign({ name: result.displayName },
         secret, 
         { algorithm: 'HS256', expiresIn: '1d' });
    return token;
};

const registerUser = async ({ displayName, email, password, image }) => {
    const ifExist = await User.findOne({ where: { email } });
    if (ifExist === null) {
     await User.create({ displayName, email, password, image });
     const token = jwt.sign({ name: displayName }, secret, { algorithm: 'HS256', expiresIn: '1d' });
       return token;
    } 
        return false;
};

module.exports = { login, registerUser };