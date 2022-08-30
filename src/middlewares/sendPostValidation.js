const allCategories = require('../services/categoriesService');

module.exports = async (req, res, next) => {
    const categoires = await allCategories.getAll();
    const { title, content, categoryIds } = req.body;
    if (!categoryIds || !title || !content) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }
    const checkID = categoires.every(({ dataValues }) => 
    categoryIds.some((id) => dataValues.id === id));
    if (!checkID) {
        return res.status(400).json({
            message: '"categoryIds" not found',
          });
    }
    
   next();
};