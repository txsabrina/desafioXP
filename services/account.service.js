const { Client, Asset } = require('../models');
const { customError } = require('../helpers')

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
    customError(404, 'Asset not found!')
  };

  return asset;
}

module.exports = {
  getBalance,
  getAssets,
};