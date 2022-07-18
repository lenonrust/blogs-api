const { DataTypes } = require('sequelize')
    /**
     * @param {import('sequelize').Sequelize} Sequelize
     * @param {import('sequelize').DataTypes} DataTypes
     */
module.exports = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: "BlogPosts",
        key: "id"
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: "Categories",
        key: "id"
      },
    },
  }, 
  {
    tableName: 'PostCategories',
    timestamps: false,
  });

    PostCategories.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, { 
        through: PostCategories,
        foreignKey: 'postId',
        otherKey:'categoryId',
        as: 'posts',
      });
    models.BlogPost.belongsToMany(models.Category, { 
      through: PostCategories,
      foreignKey: 'categoryId', 
      otherKey:'postId',
      as: 'categories',
    });
  };


  return PostCategories;
};