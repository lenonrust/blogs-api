const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.post('/', usersController.create);

usersRouter.get('/', usersController.getAll);

module.exports = usersRouter;