const express = require('express');
const ProductAdd = require('../controller/Product.controller');
const app = express.Router();
app.post('/', ProductAdd);

module.exports = app;
