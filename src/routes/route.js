const express = require("express");
const router = express.Router();
const intro = require("./introduction");
const employee = require("./employee");
const _ = require("underscore");

const welcome = require("../logger/logger");
const utility = require("../util/helper");
const format = require("../validator/formatter");
const lodash = require("lodash");

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
 

  welcome.welcome("Prashant");

  utility.printDate();

  utility.printMonth();

  utility.getBatchInfo("californium", "4", "thursday", "nodejs");

  format.trim("   FunctionUp          ");

  format.toLowerCase("CALIfORnIUM");

  format.toUpperCase("praShaNt");

  const month = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const result1 = _.chunk(month, 3);
  console.log(result1);

  const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const result2 = _.tail(oddNum);
  console.log(result2);

  const num1 = [9, 8, 7, 6];
  const num2 = [8, 7, 6, 5];
  const num3 = [7, 6, 5, 4];
  const num4 = [6, 5, 4, 3];
  const num5 = [5, 4, 3, 2];
  const result3 = _.union(num1, num2, num3, num4, num5);
  console.log(result3);

  const movies = [
    ["Biopic", "Bhag Milkha Bhag"],
    ["Comedy", "Hera-Pheri"],
    ["Action", "War"],
    ["Drama", "Kabhi Khushi Kabhi Gam"],
  ];
  console.log(lodash.fromPairs(movies));

  res.send("any dummy text");
});

router.get("/test-you", function (req, res) {
  console.log("I am here");
  res.send("very important text");
});


router.get('/movies/', function (req, res) {
  res.send(["Harry Potter", "Narnia", "Mission Impossible", "Avengers"])
})


module.exports = router;


