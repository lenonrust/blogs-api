const { DataTypes } = require('sequelize');
    /**
     * @param {import('sequelize').Sequelize} Sequelize
     * @param {import('sequelize').DataTypes} DataTypes
     */
module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    published: {
      type: DataTypes.DATE,
    },
    updated: {
      type: DataTypes.DATE,
    },
  }, 
  {
    tableName: 'BlogPosts',
  });
  return BlogPosts;
};