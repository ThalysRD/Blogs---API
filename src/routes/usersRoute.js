const express = require('express');
const userController = require('../controllers/userController');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');

const usersRoute = express.Router();

usersRoute.post('/login', 
emailValidation, 
passwordValidation, 
userController.login);

module.exports = usersRoute;