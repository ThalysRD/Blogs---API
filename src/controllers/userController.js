const userService = require('../services/UserService');

const login = async (req, res) => {
    const data = req.body;
   console.log(req.headers);
    const result = await userService.login(data);
    res.status(200).json({ token: result });
};

module.exports = { login };