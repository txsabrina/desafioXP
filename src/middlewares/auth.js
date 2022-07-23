const { tokenValidate } = require('../helpers');

const auth = async (req, _res, next) => {
  const token = req.headers.authorization;

  try {
    const client = await tokenValidate(token);

    req.client = client.codClient;

    return next();
  } catch(e) {
    next(e)
  }
  
};

module.exports = auth; 