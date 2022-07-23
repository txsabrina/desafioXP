const { Client } = require('../models');

const getBalance = async (id) => {
  const {codClient, balance} = await Client.findOne({
    where: { codClient: id }
  });

  return { codClient, balance };
};

module.exports = {
  getBalance,
};