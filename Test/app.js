const express = require('express');
//const router = express.Router();
const route = require('./Routes/routing');

const app = express();

app.use('/',route);

module.exports = app;