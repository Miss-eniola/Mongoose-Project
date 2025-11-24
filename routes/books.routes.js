const express = require('express');
const router = express.Router();
const {getAllBooks, getById, addNewBook, updateBook, deleteBookById} = require("../controller/books.controller.js");

//Routes to get all books
router.get("/books", getAllBooks);
router.get("/books/:id", getById);

// Routes to add a new book
router.post("/books/add", addNewBook);

// Routes to update a book
router.put("/books/:id", updateBook);

// Routes to delete a book by its id
router.delete("/books/delete/:id", deleteBookById);

module.exports = router;