const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/loginRouter');

const errorMiddlewareHandler = require('./middlewares/errorMiddlewareHandler');
// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

app.use(errorMiddlewareHandler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
