const { Router } = require('express');
const postConstroller = require('../controllers/postConstroller');

const postRouter = Router();

postRouter.get('/:id', postConstroller.getById);

postRouter.post('/', postConstroller.create);

postRouter.get('/', postConstroller.getAll);

module.exports = postRouter;