const throwNotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};

const throwInvalidFields = (message = 'Invalid fields') => {
  const err = new Error(message);
  err.name = 'InvalidFields';
  throw err;
};

const throwConflict = (message) => {
  const err = new Error(message);
  err.name = 'Conflict';
  throw err;
};

const throwTokenNotFound = (message) => {
  const err = new Error(message);
  err.name = 'TokenNotFound';
  throw err;
};

const throwCategoryNotFoundError = (message) => {
  const err = new Error(message);
  err.name = 'CategoryNotFoundError';
  throw err;
};

module.exports = {
  throwNotFoundError,
  throwInvalidFields,
  throwConflict,
  throwTokenNotFound,
  throwCategoryNotFoundError,
};