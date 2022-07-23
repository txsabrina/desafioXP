const { Client } = require('../models');
const custumError = require('../helpers');

const accountDeposit = async (codClient, value) => {
  if(value <= 0){
    next({status: 400, message: 'Invalid value'});
  };
  
  const client = await Client.findOne({
    where: { codClient }
  });
  await client.update({ balance: client.balance + value});

  return true;
};

const accountWithdraw = async (codClient, value) => {
  if(value > client.balance) {
    custumError(400, 'Invalid value!')
  };

  if(value <= 0) {
    custumError(400, 'Invalid value!')
  };
  
  const client = await Client.findOne({
    where: { codClient }
  });

  await client.update({ balance: client.balance - value});

  return true;
};

module.exports = {
  accountDeposit,
  accountWithdraw
}