const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
    if (name === undefined) {
        return false;
    }
    const result = await Category.create({ name });
    return result;
};

module.exports = { createCategory };