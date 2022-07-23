const { tokenValidate } = require('../helpers');

const auth = async (req, _res, next) => {
  const token = req.headers.authorization;

  try {
    const {codClient} = await tokenValidate(token,);

    req.client = codClient;
    console.log('finish')
    return next();
  } catch(e) {
    next(e)
  }
  
};

module.exports = auth; 