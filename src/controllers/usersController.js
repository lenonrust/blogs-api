const loginService = require('../services/loginService');
const usersService = require('../services/usersService');
const { throwTokenNotFound } = require('../services/utils');

const usersController = {
  async create(req, res) {
    const user = await usersService.validateAddBody(req.body);
    const newUser = await usersService.create(user);
    const token = await loginService.makeToken(newUser);
    res.status(201).json({ token });
  },

  async getAll(req, res) {
    await loginService.validateToken(req.headers.authorization);
    await loginService.readToken(req.headers.authorization);
    const list = await usersService.getAll();
    res.json(list);
  },

  async getById(req, res) {
    await loginService.validateToken(req.headers.authorization);
    await loginService.readToken(req.headers.authorization);
    const user = await usersService.getById(req.params.id);
    res.json(user);
  },

  async removeMe(req, res) {
    await loginService.validateToken(req.headers.authorization);
   const { id } = await loginService.readToken(req.headers.authorization);
   const user = await usersService.getById(id);
   if (id !== user.id) throwTokenNotFound('User unauthorized');
   await usersService.removeMe(id);
   res.status(204).end();
  },

};

module.exports = usersController;