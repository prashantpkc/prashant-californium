const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mid = require("../middleware/auth")


router.post("/users", userController.createUser)
router.post("/login", userController.loginUser)
router.get("/getUsers/:userId",mid.authenticate,mid.authorise, userController.getUserData)
router.put("/updateUsers/:userId",mid.authenticate,mid.authorise, userController.updateUser)
router.delete('/deleteUsers/:userId',mid.authenticate,mid.authorise, userController.deleteUser)

module.exports = router;