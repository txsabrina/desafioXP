const service = require('../services/investments.service');
const buyAsserts = async (req, res, next) => {
  const { codAsset, qttAssets } = req.body;
  const codClient  = req.client;
  console.log(codClient)

  
  try{
    await service.buyAsserts(codClient, codAsset, qttAssets);
    return res.status(200).json({ message: 'Successful purchase!'});
    
  } catch(err) {
    return next(err);
  };
};

const sellAsserts = async (req, res, next) => {
  const { codAsset, qttAssets } = req.body;
  const  codClient  = req.client;

  try {
    await service.sellAsserts(codClient, codAsset, qttAssets);
    return res.status(200).json({ message: 'Successful sale!'});
  } catch (err) {
    return next(err)
  };
};

module.exports = {
  buyAsserts,
  sellAsserts,
};