const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRoute = express.Router();

categoriesRoute.post('/categories', categoriesController.createCategory);
categoriesRoute.get('/categories', categoriesController.getAll);

module.exports = categoriesRoute;