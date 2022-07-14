const categoriesService = require('../services/categoriesService');
const loginService = require('../services/loginService');

const categoriesController = {

  async create(req, res) {
    await loginService.validateToken(req.headers.authorization);
    await loginService.readToken(req.headers.authorization);
    const name = await categoriesService.validateAddName(req.body);
    const category = await categoriesService.create(name);
    res.status(201).json(category);
  },

  async getAll(req, res) {
    await loginService.validateToken(req.headers.authorization);
    await loginService.readToken(req.headers.authorization);
    const categories = await categoriesService.getAll();
    res.json(categories);
  },
};

module.exports = categoriesController;