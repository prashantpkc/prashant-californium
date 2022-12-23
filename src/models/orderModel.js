const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  amount: { type: Number },
  isFreeAppUser: { type: String, default: true },
  date: { type: Date , default: Date.now()},
});
module.exports = mongoose.model("Order", orderSchema);
