const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (user) => {
  const token = jwt.sign({user}, process.env.JWT_SECRET, { 
    expiresIn: '25h',
    algorithm: 'HS256',
  });

  return token;
};

const tokenValidate = (token) => {
  const segredo = process.env.JWT_SECRET; 
  if (!token) {
    return { status: 401, message: 'Token not found' };
  }

  try {
    const {client}  = jwt.verify(token, segredo);

    return client;
  } catch (_e) {
    const error = new Error('Expired or invalid token'); 
    error.status = 401;

    throw error;
  }
};

module.exports = {
  createToken,
  tokenValidate,
};