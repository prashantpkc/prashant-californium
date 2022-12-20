const { count } = require("console");
const BookModel = require("../models/bookModel");
const AuthorModel = require("../models/authorModel");

// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)

const createBook = async function (req, res) {
  let data = req.body;
  let savedData = await BookModel.create(data);
  res.send({ msg: savedData });
};

const createAuthor = async function (req, res) {
  let data = req.body;
  let savedData = await AuthorModel.create(data);
  res.send({ msg: savedData });
};

// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )

const bookList = async function (req, res) {
  let data = req.body;
  let authorId = await AuthorModel.findOne(data).select({
    author_id: 1,
    _id: 0,
  });
  console.log(authorId);
  let allBooks = await BookModel.find(authorId);
  res.send({ msg: allBooks });
};

// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

const getAuthorName = async function (req, res) {
  let data = req.body;
  let updatePrice = await BookModel.findOneAndUpdate(
    { name: "Two states" },
    { $set: { price: 100 } },
    { new: true }
  );
  let authorName = await AuthorModel.findOne({
    author_id: { $eq: updatePrice.author_id },
  });
  let result = {};
  result.author = authorName.author_name;
  result.changePrice = updatePrice.price;
  res.send({ msg: result });
};

// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books..
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

const booksBetween = async function (req, res) {
  let allBooks = await BookModel.find({
    price: { $gte: 50, $lte: 100 },
  }).select({
    author_id: 1,
  });
  const authorIds = allBooks.map((x) => x);
  const authors = await AuthorModel
    .find({ authorIds: { $eq: authorIds } })
    .select({ author_name: 1, _id: 0 });
  const books = await BookModel.find({ authorIds: { $eq: authorIds } }).select({
    name: 1,
    _id: 0,
  });
  res.send({ msg: books, authors });
};

//=================================================================================//

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.bookList = bookList;
module.exports.getAuthorName = getAuthorName;
module.exports.booksBetween = booksBetween;

