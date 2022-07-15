const { Router } = require('express');
const postConstroller = require('../controllers/postConstroller');

const postRouter = Router();

postRouter.post('/', postConstroller.create);

module.exports = postRouter;