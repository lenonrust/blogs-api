const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.getAll);

categoriesRouter.post('/', categoriesController.create);

module.exports = categoriesRouter;