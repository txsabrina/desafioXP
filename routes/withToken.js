const express = require('express');

const route = express.Router();

const { 
  getBalance,
  getAssets,
  getAssetByClient
} = require('../controllers/account.controller');

route.get('/conta', getBalance);

route.get('/ativos/:id', getAssets);

route.get('/ativos/me', getAssetByClient);

module.exports = route;
