const errors = {
  ValidationError: 400,
  InvalidFields: 400,
  NotFoundError: 404,
  Conflict: 409,
  TokenNotFound: 401,
  CategoryNotFoundError: 400,
};

/**
 * @param {Error} err 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {import('express').NextFunction} next 
 */
const errorMiddlewareHandler = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message });
};

module.exports = errorMiddlewareHandler;