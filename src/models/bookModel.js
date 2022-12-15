const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : String,
    authorName : String,
    category : {
        type: String,
        enum: ["Adventure", "Fiction", "Romance"]
    },
    year : Number,

}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) // books


// On similar lines as above(today’s mongodb session APIs), complete this assignment and submit explainer video for the same : Create a bookSchema with bookName, authorName, category and year . Create same 2 api's for books i.e. : 1 api to create a new book and another api to get the list of all books. 


