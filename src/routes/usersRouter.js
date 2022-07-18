const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.delete('/me', usersController.removeMe);

usersRouter.post('/', usersController.create);

usersRouter.get('/:id', usersController.getById);

usersRouter.get('/', usersController.getAll);

module.exports = usersRouter;