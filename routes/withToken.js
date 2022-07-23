const express = require('express');

const route = express.Router();

const mid = require('../middlewares');

const { 
  getBalance,
  getAssets,
  getAssetByClient
} = require('../controllers/account.controller');

const { buyAsserts, sellAsserts } = require('../controllers/investiments.controller');

route.get('/conta', getBalance);

route.get('/ativos/:id', getAssets);

route.get('/ativos/me', getAssetByClient);

route.post('/investimento/comprar', buyAsserts);

route.post('/investimento/vender', mid.validateInvest, sellAsserts);

module.exports = route;
