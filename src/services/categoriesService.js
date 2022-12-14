const Joi = require('joi');
const models = require('../database/models');
const { throwCategoryNotFoundError } = require('./utils');

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

  async getAll() {
    const categories = await models.Category.findAll({ raw: true });
    return categories;
  },

  async getById(id) {
    const category = await models.Category.findOne({ where: id }, { raw: true });
    if (!category) throwCategoryNotFoundError('"categoryIds" not found');
    return category;
  },

};

module.exports = categoriesService;