const userService = require('../services/userService');

const verifyEmail = async (req, res, next) => {
    const data = req.body;
    if (!data.email) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const result = await userService.login(data);
    if (result === null) {
     return res.status(400).json({
        message: 'Invalid fields',
      });
    }
    
    next();
};

module.exports = verifyEmail;