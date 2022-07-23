const service = require('../services/account.service');

const getBalance = async (req, res, next) => {
  const codClient = req.client;
  try{
    const result = await service.getBalance(codClient);

    return res.status(200).json(result);
  } catch(err) {
    next(err)
  }
};

const getAssets = async (req, res, next) => {
  const { id: codAsset } = req.params;

  try{
    const result = await service.getAssets(codAsset);

    return res.status(200).json(result);
  } catch(e) {
    next(e)
  }
};

module.exports = {
  getBalance,
  getAssets,
};