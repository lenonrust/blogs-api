const categoriesService = require('../services/categoriesService');
const loginService = require('../services/loginService');
const postService = require('../services/postService');
const { throwTokenNotFound } = require('../services/utils');

const postConstroller = {
  
  async create(req, res) {
    await loginService.validateToken(req.headers.authorization);
    const { id } = await loginService.readToken(req.headers.authorization);
    const { categoryIds, title, content } = req.body;
    const validate = { title, content };
    await postService.validatePostBody(validate);
    await Promise.all(categoryIds.map((cat) => categoriesService.getById(cat))); 
    const post = await postService.create(categoryIds, title, content, id); 
    res.status(201).json(post);
  },

  async getAll(req, res) {
    await loginService.validateToken(req.headers.authorization);
    await loginService.readToken(req.headers.authorization);
    const posts = await postService.getAll();
    res.json(posts);
  },

  async getById(req, res) {
    const { id } = req.params;
    await loginService.validateToken(req.headers.authorization);
    await loginService.readToken(req.headers.authorization);
    const post = await postService.getById(id);
    res.json(post);
  },

  async edit(req, res) {
    const changes = req.body;
    await postService.validatePostBody(changes);
    await loginService.validateToken(req.headers.authorization);
    const { id } = await loginService.readToken(req.headers.authorization);
    const post = await postService.getById(req.params.id);
    if (id !== post.userId) throwTokenNotFound('Unauthorized user');
    await postService.edit(req.params.id, changes);
    const updatedPost = await postService.getById(req.params.id);
    res.json(updatedPost);
  },
};

module.exports = postConstroller;