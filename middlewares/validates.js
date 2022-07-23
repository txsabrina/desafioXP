const { schemaCreate } = require('../helpers');

const validateCreate = (req, _res, next) => {
  const { name, email, password } = req.body;

  const { error } = schemaCreate.validate({ name, email, password });
  if(error) return next({ status: 400, message: error.message });

  return next();
};

module.exports = {
  validateCreate,
};