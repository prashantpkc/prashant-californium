const express = require("express");
const router = express.Router();
const intro = require("./introduction");
const employee = require("./employee");
const _ = require("underscore");

const movie1 = require("../film/movie1");
const movie2 = require('../film/movie2')

router.get("/test-me", function (req, res) {
  console.log("email from introduction module", intro.myEmail);
  intro.myFunction("Sabiha");
  console.log("email from employee module", employee.myEmail);

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let result = _.first(days, 4);
  console.log(`Result from underscore function is ${result}`);

  res.send("any dummy text");
});

router.get("/test-you", function (req, res) {
  console.log("I am here");
  res.send("very important text");
});

router.get("/movies/", function (req, res) {
  res.send(["Harry Potter", "Narnia", "Mission Impossible", "Avengers"]);
});

router.get("/movies/:indexNumber", function (req, res) {
  res.send(["The name of movie"]);
  console.log("the name of movie is", movie1.film1(req.params.indexNumber));
});

router.get("/films", function (req, res) {
  res.send([
    {
      id: 1,
      name: "The Shining",
    },
    {
      id: 2,
      name: "Incendies",
    },
    {
      id: 3,
      name: "Rang de Basanti",
    },
    {
      id: 4,
      name: "Finding Nemo",
    },
  ]);
});

router.get('/films2/:i', function (req, res) {
  res.send(["The name of movies"]);
  console.log(movie2.films2(req.params.i))
})


module.exports = router;

