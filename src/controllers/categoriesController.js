const categoiresService = require('../services/categoriesService');

const createCategory = async (req, res) => {
    const data = req.body;
  const result = await categoiresService.createCategory(data);
  if (!result) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  return res.status(201).json(result);
};

const getAll = async (req, res) => {
  const result = await categoiresService.getAll();
  return res.status(200).json(result);
};

module.exports = { createCategory, getAll };