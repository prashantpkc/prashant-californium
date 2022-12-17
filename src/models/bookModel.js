const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    ISBN: {
      type: String,
      required: true,
      unique: true,
    },
    author: String,
    tags: [String],
    year: {
      type: Number,
      default: 2021,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    prices: {
      indianPrice: String,
      europeanPrice: String,
      japanPrice: String,
    },
    sales: {
      type: Number,
      default: 0,
    },
    completionDate: Date,
    inStock: {
      type: Boolean,
      default: true,
    },
    pages: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
bookSchema.plugin(uniqueValidator);
