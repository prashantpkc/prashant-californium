const express = require('express');
const router = express.Router();
const BookController= require("../controllers/bookController")

router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", BookController.createAuthor  )
router.post("/bookList", BookController.bookList)
router.post("/getAuthorName", BookController.getAuthorName)
router.get("/booksBetween", BookController.booksBetween)

module.exports = router;