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

module.exports = { login };