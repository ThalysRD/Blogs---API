const jwt = require('jsonwebtoken');

const secret = 'secretJWT';

const jwtService = {
    generateToken: (id) => {
     const token = jwt.sign({ data: id }, secret, { expiresIn: '1d', algorithm: 'HS256' });
     return token;
    },

    validateToken: (token) => {
      try {
       const decode = jwt.verify(token, secret);
       return decode;
      } catch (error) {
        return { message: 'Expired or invalid token' };
      }
    },
};

module.exports = jwtService;