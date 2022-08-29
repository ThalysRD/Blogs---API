const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRoute = express.Router();

categoriesRoute.post('/categories', categoriesController.createCategory);

module.exports = categoriesRoute;