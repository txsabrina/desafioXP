const auth = require('./auth');
const errorHandle = require('./errorHandle');
const { validateCreate } = require('./validates')

module.exports = {
  auth,
  errorHandle,
  validateCreate,
};