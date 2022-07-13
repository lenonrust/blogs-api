const loginService = require('../services/loginService');

const loginController = {
  /** @type {import('express').RequestHandler} */

  async login(req, res) {
    const data = await loginService.validateBodyLogin(req.body);
    const user = await loginService.checkByEmail(data);
    const token = await loginService.makeToken(user);
    res.json({ token });
  },
};

module.exports = loginController;