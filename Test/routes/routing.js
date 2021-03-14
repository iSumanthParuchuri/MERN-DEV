const express = require('express');
const { route } = require('../app');

const routing = express.Router();
const productController = require('../controller/productController');

routing.use((req, res, next) => {
    console.log(`Req method is ${req.method}`);
    console.log(`Req url is ${req.url}`);
    next();
});

routing.get('/products', productController.getProducts);

module.exports = routing;