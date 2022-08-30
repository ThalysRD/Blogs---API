const { BlogPost } = require('../database/models');
const { PostCategory } = require('../database/models');

const sendPost = async ({ title, content, categoryIds }, userId) => {
   const result = await BlogPost.create({ title, 
    content,
     userId, 
     published: Date.now(),
      updated: Date.now() });
      await Promise.all(
         categoryIds.map(async (id) => {
         await PostCategory.create({ postId: result.dataValues.id, categoryId: id }); 
}),
      );
   return result;
};

module.exports = { sendPost };