const express = require('express');
const userController = require('../controllers/userController');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const registerUser = require('../middlewares/registerUser');

const usersRoute = express.Router();

usersRoute.post('/login', 
emailValidation, 
passwordValidation, 
userController.login);

usersRoute.post('/user', 
registerUser,
 userController.registerUser);

module.exports = usersRoute;