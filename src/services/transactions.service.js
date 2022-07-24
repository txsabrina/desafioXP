const { Client } = require('../database/models');
const custumError = require('../helpers');

const accountDeposit = async (codClient, value) => {
  if(value <= 0){
    next({status: 400, message: 'Invalid value'});
  };
  
  const client = await Client.findOne({
    where: { codClient }
  });
  await client.update({ balance: client.balance + value});
};

const accountWithdraw = async (codClient, value) => {
  if(value <= 0) {
    custumError(400, 'Invalid value!')
  };
  
  const client = await Client.findOne({
    where: { codClient }
  });
  
  if(value > client.balance) {
    custumError(400, 'Invalid value!')
  };

  await client.update({ balance: client.balance - value});
};

module.exports = {
  accountDeposit,
  accountWithdraw
}