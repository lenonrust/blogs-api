const { Router } = require('express');
const postConstroller = require('../controllers/postConstroller');

const postRouter = Router();

postRouter.get('/:id', postConstroller.getById);

postRouter.put('/:id', postConstroller.edit);

postRouter.post('/', postConstroller.create);

postRouter.get('/', postConstroller.getAll);

module.exports = postRouter;