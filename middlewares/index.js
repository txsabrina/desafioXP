const auth = require('./auth');
const errorHandle = require('./errorHandle');
const { validateCreate, validateLogin } = require('./validates')

module.exports = {
  auth,
  errorHandle,
  validateCreate,
  validateLogin,
};