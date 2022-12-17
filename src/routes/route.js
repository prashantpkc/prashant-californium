const express = require("express");
const router = express.Router();
const {
  createBook,
  bookList,
  getBooksInYear,
  getXINRBooks,
  getParticularBooks,
  getRandomBooks,
} = require("../controllers/bookController");

router.post("/createBook", createBook);

router.get("/bookList", bookList);

router.post("/getBooksInYear", getBooksInYear);

router.get("/getXINRBooks", getXINRBooks);

router.post("/getParticularBooks", getParticularBooks);

router.get("/getRandomBooks", getRandomBooks);

module.exports = router;
