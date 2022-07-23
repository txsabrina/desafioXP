const express = require('express');

const route = express.Router();

const { 
  getBalance,
  getAssets,
} = require('../controllers/account.controller');

route.get('/conta', getBalance);

route.get('/ativos/:id', getAssets);

module.exports = route;
