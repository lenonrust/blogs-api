const { DataTypes } = require('sequelize')
    /**
     * @param {import('sequelize').Sequelize} Sequelize
     * @param {import('sequelize').DataTypes} DataTypes
     */
module.exports = (sequelize, DataTypes) => {
  const PostCategories = DataTypes.define('PostCategories', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "BlogPosts",
        key: "id"
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "Categories",
        key: "id"
      },
    },
  }, 
  {
    tableName: 'PostCategories'
  });
  return postCategories;
};