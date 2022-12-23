const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const User = require("../models/userModel");

const mongoose = require("mongoose");

module.exports.createOrder = async (req, res, next) => {
  let data = req.body;
  if (!mongoose.isValidObjectId(data.userId))
    return res.send({ message: "userId is invalid" });
  if (!mongoose.isValidObjectId(data.productId))
    return res.send({ message: "ProductId is invalid" });

  let existUser = await User.findOne({ _id: data.userId });
  if (!existUser) return res.send({ message: "userId doesNot exists" });

  let existProduct = await Product.findOne({ _id: data.productId });
  if (!existProduct) return res.send({ message: "productId doesNot exists" });

  if (existUser.isFreeAppUser == false) {
    if (existUser.balance < data.amount) {
      return res.send({ message: "user doesn't have enough balance" });
    } else {
      let deductedBalance = existUser.balance - data.amount;
      await User.findOneAndUpdate(
        { _id: data.userId },
        { balance: deductedBalance },
        { upsert: true, new: true }
      );
      let createOrder = await Order.create(data);
      console.log(createOrder)
      return res.send({data: createOrder});
    }
  } else {
    data.amount = 0;
    let createOrder = await Order.create(data);
    return res.send({data: createOrder});
  }
  
};
