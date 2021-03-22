const express = require('express');
//const router = express.Router();
const route = require('./Routes/routing');
const myReqLogger = require('./utilities/RequestLogger');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(myReqLogger);
app.use('/',route);

module.exports = app;