const auth = require('./auth');
const errorHandle = require('./errorHandle');
const { validateCreate, validateLogin, validateInvest } = require('./validates')

module.exports = {
  auth,
  errorHandle,
  validateCreate,
  validateLogin,
  validateInvest,
};