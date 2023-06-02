const express = require('express');
const { SignUpUser, LoginUser, getAllUsers } = require('../controller/User.controller');
const app = express.Router();
app.get('/', getAllUsers);
app.post('/login', LoginUser);
app.post('/signup', SignUpUser);

module.exports = app;
