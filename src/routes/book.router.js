const express = require("express");

const bookRouter = express.Router();

const { bookController } = require("../controllers");

bookRouter.post("/", bookController.createBook);
bookRouter.get("/", bookController.getBooks);
bookRouter.get("/:bookId", bookController.getBookById);
bookRouter.put("/:bookId", bookController.updateBook);
bookRouter.delete("/:bookId", bookController.deleteBook);

module.exports = bookRouter;
