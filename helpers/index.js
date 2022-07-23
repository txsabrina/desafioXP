const encryptPass = require('./encryptPass');
const {createToken, tokenValidate} = require('./token');

module.exports = {
  encryptPass,
  createToken,
  tokenValidate,
};