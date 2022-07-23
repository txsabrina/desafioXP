const service = require('../services/client.service');

const createClient = async (req, res, next) => {
  const  { body } = req;
  
  try{
    const result = await service.createClient(body);
    if(result.status) return next(result);

    return res.status(201).json({ token: result });
  } catch(e) {
    next(e)
  };
};

module.exports = { createClient };