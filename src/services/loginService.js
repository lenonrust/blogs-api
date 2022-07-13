require('dotenv').config();
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const models = require('../database/models');
const { throwInvalidFields } = require('./utils');

const secret = process.env.JWT_SECRET;

const loginService = {
  
  async validateBodyLogin(body) {
    const schema = Joi.object({
      email: Joi.string().required().email().messages({
        'string.empty': 'Some required fields are missing',
        'any.required': 'Some required fields are missing',
      }),
      password: Joi.string().required().min(6).messages({
        'string.empty': 'Some required fields are missing',
        'any.required': 'Some required fields are missing',
      }),
    }).required();
    const result = await schema.validateAsync(body);
    return result;
  },

  async makeToken(user) {
    const token = jwt.sign({ data: user }, secret);
    return token;
  },

  async readToken(token) {
    const { data } = jwt.verify(token, secret);
    return data;
  },

  async checkByEmail(body) {
    const { email, password } = body;
    const user = await models.User.findOne(
      { 
      where: { email }, 
      raw: true,
      },
    );
    if (!user || user.password !== password) throwInvalidFields();
    const { password: _, ...newUser } = user;
    return newUser;
  },

};

module.exports = loginService;