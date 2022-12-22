const express = require('express');
const router = express.Router();
const commonMW = require('../middlewares/commonMiddlewares')
const UserController = require('../controllers/userController')

router.get("/timeAndIP", commonMW.mid , UserController.timeAndIP)


module.exports = router;