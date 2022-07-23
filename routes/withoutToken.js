const express = require('express');

const route = express.Router();

const mid = require('../middlewares');

const { createClient } = require('../controllers/client.controller'); 

route.post('/client', mid.validateCreate, createClient);

module.exports = route;