const { Client, Asset, ClientAsset } = require('../models');
const { customError } = require('../helpers');

const investmentsCreate = async (codClient, codAsset, qttAssets, value) => {
  const newInvestiment = {
    codAsset,
    codClient,
    qttAssets,
    value
  }
  
  const [investiment] = await ClientAsset.findOrCreate({ 
    where: { codAsset, codClient },
    defaults: { ...newInvestiment },
  });

  if(investiment) return investiment;
};

const updateTable = async (model, up) => {
  await model.update(up)
};

const buyAsserts = async (codClient, codAsset, qttAssets) => {
  const asset = await Asset.findOne({ where: { codAsset }});
  const client = await Client.findOne({ where: { codClient }});

  if(asset.qttAssets < qttAssets) {
    customError(400, 'Amount of unavailable assets');
  };
  
  const investiment = await investmentsCreate(codClient, codAsset, qttAssets, asset.value);
  
  if(investiment) {
    await updateTable(investiment, { 
      qttAssets: investiment.qttAssets + qttAssets,
    });
  }
  
  const purchaseTotal = asset.value * qttAssets;
  
  await updateTable(asset, { qttAssets: asset.qttAssets - qttAssets });
  await updateTable(client, { balance: client.balance - purchaseTotal });
};

const validations = async (codClient, codAsset, qttAssets) => {
  const asset = await Asset.findOne({ where: { codAsset }});
  if(!asset) {
    customError(400, 'Invalid asset!');
  };

  const patrimony = await ClientAsset.findOne({ where: { codAsset, codClient }});
  if(!patrimony) {
  customError(400, 'This asset was not acquired!');
  }

  if( qttAssets > patrimony.qttAssets) {
    customError(400, 'This asset was not acquired!');
  };
};

const sellAsserts = async (codClient, codAsset, qttAssets) => {
  const asset = await Asset.findOne({ where: { codAsset }})
  const client = await Client.findOne({ where: { codClient }});
  const patrimony = await ClientAsset.findOne({ where: { codAsset, codClient }});

  validations(codClient, codAsset, qttAssets);
  
  const purchaseTotal = asset.value * qttAssets;

  
  await updateTable(patrimony, { qttAssets: patrimony.qttAssets - qttAssets});
  
  await updateTable(asset, { qttAssets: asset.qttAssets + qttAssets });
  await updateTable(client, { balance: client.balance + purchaseTotal });

};

module.exports = {
  buyAsserts,
  sellAsserts,
}