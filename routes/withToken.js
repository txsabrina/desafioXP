const express = require('express');

const route = express.Router();

const { 
  getBalance,
  getAssets,
  getAssetByClient
} = require('../controllers/account.controller');

const { buyAsserts } = require('../controllers/investiments.controller');

route.get('/conta', getBalance);

route.get('/ativos/:id', getAssets);

route.get('/ativos/me', getAssetByClient);

route.post('/investimento/comprar', buyAsserts);

module.exports = route;
