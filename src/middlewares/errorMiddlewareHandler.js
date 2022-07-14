const errors = {
  ValidationError: 400,
  InvalidFields: 400,
  NotFoundError: 400,
  Conflict: 409,
  TokenNotFound: 401,
};

/**
 * @param {Error} err 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const errorMiddlewareHandler = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  console.log(message);
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message });
};

module.exports = errorMiddlewareHandler;