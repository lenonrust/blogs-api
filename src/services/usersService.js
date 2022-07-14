require('dotenv').config();
const Joi = require('joi');
const models = require('../database/models');
const { throwConflict } = require('./utils');

const usersService = {
  async validateAddBody(body) {
    const schema = Joi.object({
      displayName: Joi.string().required().min(8),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
      image: Joi.string(),
    });
    const result = await schema.validateAsync(body);
    return result;
  },

  async create(value) {
    const { email } = value;
    const findUser = await models.User.findOne({ where: { email } });
    // const exist = findUser.toJSON();
    if (findUser) throwConflict('User already registered'); 
    const user = await models.User.create(value, { raw: true });
    return user;
  },
};

module.exports = usersService;