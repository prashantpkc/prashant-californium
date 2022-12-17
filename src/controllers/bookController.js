
const BookModel = require("../models/bookModel");

//======================================================================================================//
//*** createBook : to create a new entry..use this api to create 11+ entries in your collection
const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

//======================================================================================================//
//*** bookList : gives all the books- their bookName and authorName only

const bookList = async function (req, res) {
  let allBooks = await BookModel.find().select({ bookName: 1, author: 1 });

  res.send({ msg: allBooks });
};
//======================================================================================================//
//**** getBooksInYear: takes year as input in post request and gives list of all books published that year

const getBooksInYear = async function (req, res) {
  let data = req.body.year;
  let allBooks = await BookModel.find({ year: data });
  res.send({ msg: allBooks });
};
//======================================================================================================//
//*** getXINRBooks- request to return all books who have an Indian price tag of “100 INR” or “200 INR” or “500 INR”

const getXINRBooks = async function (req, res) {
  let allBooks = await BookModel.find({
    $or: [
      { "prices.indianPrice": { $eq: "100 INR" } },
      { "prices.indianPrice": { $eq: "300 INR" } },
      { "prices.indianPrice": { $eq: "500 INR" } },
    ],
  });
  return res.send({ msg: allBooks });
};

//======================================================================================================//
//*** getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books with this name
// hence the condition will differ based on what you input in the request body

const getParticularBooks = async function (req, res) {
  let condition = {};
  const {
    bookName,
    ISBN,
    year,
    indianPrice,
    europeanPrice,
    tags,
    sales,
    isPublished,
  } = req.query;
  //   console.log(bookName);
  if (bookName) condition["bookName"] = bookName;
  if (ISBN) condition["ISBN"] = ISBN;
  if (year) condition["year"] = year;
  if (indianPrice) condition["prices.indianPrice"] = indianPrice;
  if (europeanPrice) condition["prices.europeanPrice"] = europeanPrice;
  if (tags) condition["tags"] = { $in: tags };
  if (sales) condition["sales"] = sales;
  if (isPublished) condition["isPublished"] = isPublished;
  // console.log(condition);
  let allBooks = await BookModel.find(condition);
  return res.send(allBooks);
};

// const getParticularBooks = async function (req, res) {
//   let data = req.body;
//   let allBooks = await BookModel.find(data);
//   res.send({ msg: allBooks });
// };

//======================================================================================================//

//*** getRandomBooks - returns books that are available in stock or have more than 500 pages

const getRandomBooks = async function (req, res) {
  let allBooks = await BookModel.find({ pages: { $gt: 500 }, inStock: true });
  res.send({ msg: allBooks });
};

//======================================================================================================//
module.exports = {
  createBook,
  bookList,
  getBooksInYear,
  getXINRBooks,
  getParticularBooks,
  getRandomBooks,

};
