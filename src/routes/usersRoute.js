const express = require('express');
const userController = require('../controllers/userController');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const registerUser = require('../middlewares/registerUser');
const jwtAuth = require('../middlewares/jwtAuth');

const usersRoute = express.Router();

usersRoute.post('/login', 
emailValidation, 
passwordValidation, 
userController.login);

usersRoute.post('/user', 
registerUser,
 userController.registerUser);

usersRoute.get('/user', jwtAuth, userController.getAll);

usersRoute.get('/user/:id', jwtAuth, userController.getById);
module.exports = usersRoute;