const { validateToken } = require('../services/jwtService');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization === undefined || authorization === '') {
        return res.status(401).json({
            message: 'Token not found',
          });
    }
    const data = validateToken(authorization);
    if (data.message !== undefined) {
        return res.status(401).json({ message: data.message });
    }
    req.name = data;
    next();
};