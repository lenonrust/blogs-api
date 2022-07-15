const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/loginRouter');

const errorMiddlewareHandler = require('./middlewares/errorMiddlewareHandler');
const usersRouter = require('./routes/usersRouter');
const categoriesRouter = require('./routes/categoriesRouter');
const postRouter = require('./routes/postRouter');
// ...

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);

app.use('/login', loginRouter);

app.use('/post', postRouter);

app.use('/user', usersRouter);

app.use(errorMiddlewareHandler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
