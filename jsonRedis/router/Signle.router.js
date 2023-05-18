const express = require('express');
const getUSer = require('../controller/Signle.controller');
const app = express.Router();
app.get('/', getUSer);
module.exports = app;
