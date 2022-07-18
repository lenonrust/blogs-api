const { Router } = require('express');
const postConstroller = require('../controllers/postConstroller');

const postRouter = Router();

postRouter.post('/', postConstroller.create);

postRouter.get('/', postConstroller.getAll);

module.exports = postRouter;