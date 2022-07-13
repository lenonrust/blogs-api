const throwNotFoundError = (message = 'Some required fields are missing') => {
  const err = new Error(message);
  err.name = 'NotFoundError';
  throw err;
};

const throwInvalidFields = (message = 'Invalid fields') => {
  const err = new Error(message);
  err.name = 'InvalidFields';
  throw err;
};

module.exports = {
  throwNotFoundError,
  throwInvalidFields,
};