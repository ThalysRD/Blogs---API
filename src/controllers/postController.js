const postService = require('../services/postService');

const sendPost = async (req, res) => {
    const data = req.body;
    const userId = req.id.data;
    const result = await postService.sendPost(data, userId);
    return res.status(201).json(result);
};

module.exports = { sendPost };