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
};

module.exports = categoriesController;