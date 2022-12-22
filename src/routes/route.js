const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController")



router.post("/createAuthor", allController.createAuthor  )

router.post("/createPublisher", allController.createPublisher )

router.post("/createBook", allController.createBook  )

router.get("/getBooksWithAuthorDetails", allController.getBooksWithAuthorDetails )

router.put("/updateCover", allController.updateCover )

router.put("/getAuthor", allController.getAuthor )



module.exports = router;