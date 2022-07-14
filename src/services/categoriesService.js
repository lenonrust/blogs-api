const Joi = require('joi');
const models = require('../database/models');

const categoriesService = {

  async validateAddName(body) {
    const schema = Joi.object({
      name: Joi.string().required(),
    });
    const result = await schema.validateAsync(body);
    return result;
  },

  async create(value) {
    const { name } = value;
    await models.Category.create(value);
    const findCategory = await models.Category.findOne({ where: { name } });
    return findCategory;
  },

};

module.exports = categoriesService;