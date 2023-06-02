const express = require('express');
const app = express.Router();
app.get('/');
app.post('/login');
app.post('/signup');
module.exports = app;
