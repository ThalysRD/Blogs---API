const express = require('express');
const postController = require('../controllers/postController');
const jwtAuth = require('../middlewares/jwtAuth');
const sendPostVerify = require('../middlewares/sendPostValidation');

const postsRoute = express.Router();

postsRoute.post('/post', jwtAuth, sendPostVerify, postController.sendPost);

module.exports = postsRoute;
