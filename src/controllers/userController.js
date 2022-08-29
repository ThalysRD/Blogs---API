const userService = require('../services/UserService');

const login = async (req, res) => {
    const data = req.body;
    const result = await userService.login(data);
    res.status(200).json({ token: result });
};

const registerUser = async (req, res) => {
    const data = req.body;
    const result = await userService.registerUser(data);
    if (!result) {
        res.status(409).json({
            message: 'User already registered',
          });
    }
    res.status(201).json({ token: result });
};

const getAll = async (_req, res) => {
    const result = await userService.getAll();
    return res.status(200).json(result);
};

const getById = async (req, res) => {
    const data = req.params;
    const result = await userService.getById(data);
    if (result === false) {
        return res.status(404).json({
            message: 'User does not exist',
          });
    }
    res.status(200).json(result);
};
module.exports = { login, registerUser, getAll, getById };