
const createBlogPost = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
      } ,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published:{type: DataTypes.DATE,
      defaultValue: ""},
      updated: {type: DataTypes.DATE,
        defaultValue: ""},
    }, {
      tableName: 'BlogPosts',
      timestamps: false,
    });
  
   BlogPost.associate = (db) => {
    BlogPost.belongsTo(db.User, { foreingKey: 'userId'})
   }


  return BlogPost
  
  }
  
  module.exports = createBlogPost