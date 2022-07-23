const { tokenValidate } = require('../helpers/token');

const auth = async (req, _res, next) => {
  const token = req.headers.authorization;

  try {
    const client = tokenValidate(token);

    req.client = client;
    return next();
  } catch(e) {
    next(e)
  }
  
};

module.exports = auth; 