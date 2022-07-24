const express = require('express');

const route = express.Router();

const mid = require('../middlewares');

const { createClient, login } = require('../controllers/client.controller'); 

route.post('/cliente', mid.validateCreate, createClient);

route.post('/login', mid.validateLogin, login);

module.exports = route;