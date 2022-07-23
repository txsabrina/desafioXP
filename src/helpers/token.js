const jwt = require('jsonwebtoken');
require('dotenv').config();
const customError = require('../helpers/customError');

const createToken = (user) => {
  const token = jwt.sign({user}, process.env.JWT_SECRET, { 
    expiresIn: '25h',
    algorithm: 'HS256',
  });

  return token;
};

const tokenValidate = async (token) => {
  const segredo = process.env.JWT_SECRET; 
  if (!token) {
    customError(401, 'Token not found');
  }

  try {
    const {user}  = await jwt.verify(token, segredo);

    return user.dataValues;
  } catch (_e) {
    customError(401, 'Expired or invalid token')
  }
};

module.exports = {
  createToken,
  tokenValidate,
};