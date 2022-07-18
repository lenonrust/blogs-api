const categoriesService = require('../services/categoriesService');
const loginService = require('../services/loginService');
const postService = require('../services/postService');

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
};

module.exports = postConstroller;