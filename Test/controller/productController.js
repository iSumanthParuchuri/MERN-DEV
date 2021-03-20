const Products = require('../models/Products');
const Checks = require('../models/check');

exports.newProducts = async (req, res, next) => {
    try{
        const product = await Products.create(req.body);
        res.status(201).json({
            //seller: req.body.seller,
            success: true,
            product
        });
        console.log(req.body.seller);
    }
    catch(err){
        res.status(404).json({
            status : 'fail',
            message : err,
        });
    }
}

exports.newCheck = async (req, res, next) => {
    try{
        const check = await Checks.create(req.body);
        res.status(201).json({
            //seller: req.body.seller,
            success: true,
            check
        });
        console.log(req.body.seller);
    }
    catch(err){
        res.status(404).json({
            status : 'fail',
            message : err,
        });
    }
}

exports.getProducts = async (req, res, next) => {
    try{
        res.status(200).json({
            message : 'Started to get Products',
        });
    } catch(err){
        res.status(404).json({
            status : 'fail',
            message : err,
        });
    }
};