const { schemaCreate, schemaLogin } = require('../helpers');

const validateCreate = (req, _res, next) => {
  const { name, email, password } = req.body;

  const { error } = schemaCreate.validate({ name, email, password });
  if(error) return next({ status: 400, message: error.message });

  return next();
};

const validateLogin = (req, _res, next) => {
  const {  email, password } = req.body;

  const { error } = schemaLogin.validate({ email, password });
  if(error) return next({ status: 400, message: error.message });

  return next();
};

const validateInvest = (req, _res, next) => {
  const { codAsset, qttAssets } = req.body;

  if(!codAsset || codAsset === '') {
    return next({ status: 400, message: 'Invalid code!' });
  }
  if(!qttAssets || qttAssets === '') {
    return next({ status: 400, message: 'Invalid quantity!' });
  }
  return next();
};

module.exports = {
  validateCreate,
  validateLogin,
  validateInvest,
};