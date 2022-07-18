const { Router } = require('express');
const postConstroller = require('../controllers/postConstroller');

const postRouter = Router();

postRouter.delete('/:id', postConstroller.remove);

postRouter.get('/:id', postConstroller.getById);

postRouter.put('/:id', postConstroller.edit);

postRouter.get('/', postConstroller.getAll);

postRouter.post('/', postConstroller.create);

module.exports = postRouter;