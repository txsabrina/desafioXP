const { Client, Asset } = require('../models');
const { customError } = require('../helpers');

const getBalance = async (id) => {
  const {codClient, balance} = await Client.findOne({
    where: { codClient: id }
  });

  return { codClient, balance };
};

const getAssets = async (codAsset) => {
  const asset = await Asset.findOne({
    where: { codAsset },
    attributes: ['codAsset', 'qttAssets', 'value'],
  });

  if(!asset) {
    customError(404, 'Asset not found!');
  };

  return asset;
};

const getAssetByClient = async (codClient) => {
  const result = await ClientAsset.findAll({
    where: {codClient},
    attributes: ['codClient', 'codAsset', 'qttAssets', 'value'],
  });
  
  if(!result) {
    customError(400, 'Client has no assets!');
  }

  return result;
};

module.exports = {
  getBalance,
  getAssets,
  getAssetByClient,
};