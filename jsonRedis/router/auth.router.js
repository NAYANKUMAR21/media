const express = require('express');
const { Login, Signup } = require('../controller/auth.controller');
const app = express.Router();
app.post('/login', Login);
app.post('/Signup', Signup);
module.exports = app;
