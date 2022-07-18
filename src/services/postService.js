const Joi = require('joi');
const Sequelize = require('sequelize');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);
const models = require('../database/models');

const postService = {

  async validatePostBody(body) {
    const schema = Joi.object({
      title: Joi.string().required().messages({
        'string.empty': 'Some required fields are missing',
        'any.required': 'Some required fields are missing',
       }),
      content: Joi.string().required().messages({
        'string.empty': 'Some required fields are missing',
        'any.required': 'Some required fields are missing',
      }),
    });
    const result = await schema.validateAsync(body);
    return result;
  },

  async create(cat, title, content, id) {
      const result = await sequelize.transaction(async (t) => {
        const post = await models.BlogPost
        .create({ title, content, userId: id, published: new Date(), updated: new Date() }, 
          { transaction: t, raw: true }); 
        await Promise.all(cat.map((itr) => models.PostCategory
        .create(
          { postId: post.id, categoryId: itr }, { transaction: t, raw: true },
        ))); 
        const newPost = post.toJSON();
        return newPost;
      });
      return result;  
  },

  async getAll() {
      const posts = await models.BlogPost.findAll({ include: 
     [{
       model: models.User,
       as: 'user',
       attributes: { exclude: ['password'] },
      },
      { 
      model: models.Category,
      as: 'categories',
      through: { attributes: { exclude: ['categoryId', 'postId'] } },
     
      }],
      attributes: { exclude: ['UserId'] },
     });
      return posts;
  },

};

module.exports = postService;