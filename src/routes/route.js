const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const ProductController = require("../controllers/productController");
const OrderController = require("../controllers/orderController");

const { mid1 } = require("../middlewares/commonMiddlewares");

router.post("/user/create", mid1, UserController.createUser);
router.post("/product/create", ProductController.createProduct);
router.post("/order/create", mid1, OrderController.createOrder);

module.exports = router;
