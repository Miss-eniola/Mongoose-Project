const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: false,
  },

  author: {
    type: String,
    required: true,
  },

  publicationNumber: {
    type: String,
    required: true,
  },

  ISBN: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  dateOfPublication: {
    type: Date,
    required: true,
  },

  publisher: {
    type: String,
    required: true,
  }
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;