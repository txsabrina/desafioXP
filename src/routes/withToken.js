const express = require('express');

const route = express.Router();

const mid = require('../middlewares');

const { 
  getBalance,
  getAssets,
  getAssetByClient
} = require('../controllers/account.controller');

const { buyAsserts, sellAsserts } = require('../controllers/investiments.controller');

const { accountDeposit, accountWithdraw} = require('../controllers/transactions.controller');

route.get('/conta', getBalance);

route.get('/ativos/me', getAssetByClient);

route.get('/ativos/:id', getAssets);

route.post('/investimento/comprar', buyAsserts);

route.post('/investimento/vender', mid.validateInvest, sellAsserts);

route.post('/conta/deposito', accountDeposit);

route.post('/conta/saque', accountWithdraw);

module.exports = route;
