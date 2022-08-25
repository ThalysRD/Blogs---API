
const createBlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      } ,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, {
      tableName: 'BlogPosts',
      timestamps: false,
    });
  
   BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, {foreingKey: 'userId'})
   }


  return BlogPost
  
  }
  
  module.exports = createBlogPost