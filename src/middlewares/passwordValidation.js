const userService = require('../services/UserService');

const verifyPassword = async (req, res, next) => {
    const data = req.body;
    if (!data.password) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }
    const result = await userService.login(data);
    if (result === null) {
     return res.status(400).json({
        message: 'Invalid fields',
      }); 
}
    next();
};

module.exports = verifyPassword;