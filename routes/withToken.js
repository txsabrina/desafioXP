const express = require('express');

const route = express.Router();

const { getBalance } = require('../controllers/account.controller');

route.get('/conta', getBalance);

module.exports = route;
