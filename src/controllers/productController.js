const Product = require('../models/productModel');

module.exports.createProduct = async(req, res, next) => {
    let {name} = req.body;
    if(!name) return res.send({message: "name is required"});
    let productCreate = await Product.create(req.body)
    res.send({productCreate});
}