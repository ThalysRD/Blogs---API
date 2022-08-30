const express = require('express');
const categoriesController = require('../controllers/categoriesController');
const jwtAuth = require('../middlewares/jwtAuth');

const categoriesRoute = express.Router();

categoriesRoute.post('/categories', jwtAuth, categoriesController.createCategory);
categoriesRoute.get('/categories', jwtAuth, categoriesController.getAll);

module.exports = categoriesRoute;