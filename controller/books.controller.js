const books = require("../utils/book");
const Book = require("../models/model.js");

// Get all books
exports.getAllBooks = (async (req, res) => {
  const books = await Book.find();
  console.log("All books", books);
  return res.status(200).json(books);
});

// Get a book by its Id
exports.getById = (req, res) => {
  const bookId = Number(req.params.id);
  const book = books.find((b) => b.id === bookId);
  console.log(book);
};

// Add a new book
exports.addNewBook = async (req, res) => {
  const newBook = req.body;
  const book = await Book.create({
    id: newBook.id,
    author: newBook.author,
    publicationNumber: newBook.publicationNumber,
    ISBN: newBook.ISBN,
    title: newBook.title,
    dateOfPublication: newBook.dateOfPublication,
    publisher: newBook.publisher,
  });

  console.log("Successfully added new book", book);
  res.json(book);
};

exports.updateBook = (async (req, res) => {
 const bookId = req.params.id;
 
  const bookUpdate = await Book.findByIdAndUpdate(
    bookId,
    {title: "American Grown"},
    {new: true},
  );
  console.log("Book updated", bookUpdate);
  res.json(bookUpdate);
 
});

exports.deleteBookById = (async (req, res) => {
  const bookId = req.params.id;

  const deletedBook = await Book.findByIdAndDelete(bookId);
  console.log("Book deleted", deletedBook);
  res.json(deletedBook);
});











