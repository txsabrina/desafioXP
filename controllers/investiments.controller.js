const service = require('../services/investments.service');
const buyAsserts = async (req, res, next) => {
  const { codAsset, qttAssets } = req.body;
  const codClient  = req.client;
  
  try{
    await service.buyAsserts(codClient, codAsset, qttAssets);
    return res.status(200).json({ message: 'Successful purchase!'});
    
  } catch(e) {
    return next(e);
  };
};

module.exports = {
  buyAsserts,
};