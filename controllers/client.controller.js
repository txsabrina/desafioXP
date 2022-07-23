const service = require('../services/client.service');

const createClient = async (req, res, next) => {
  const  { body } = req;
  
  try{
    const result = await service.createClient(body);
    if(result.status) return next(result);

    return res.status(201).json({ token: result });
  } catch (err) {
    next(err)
  };
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const result = await service.login(email, password);

    res.status(200).json({ token: result });
  } catch (err) {
    next(err)
  }
};

module.exports = { 
  createClient,
  login
};