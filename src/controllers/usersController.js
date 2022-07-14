const loginService = require('../services/loginService');
const usersService = require('../services/usersService');

const usersController = {
  async create(req, res) {
    const user = await usersService.validateAddBody(req.body);
    const newUser = await usersService.create(user);
    const token = await loginService.makeToken(newUser);
    res.status(201).json({ token });
  },
};

module.exports = usersController;