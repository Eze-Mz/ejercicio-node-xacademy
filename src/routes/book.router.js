const express = require("express");

const bookRouter = express.Router();

const { bookController } = require("../controllers");
const { userAuthenticatedMDW } = require("../middlewares/auth.mdw");

bookRouter.post("/", userAuthenticatedMDW, bookController.createBook);
bookRouter.get("/", bookController.getBooks);
bookRouter.get("/:bookId", bookController.getBookById);
bookRouter.put("/:bookId", userAuthenticatedMDW, bookController.updateBook);
bookRouter.delete("/:bookId", userAuthenticatedMDW, bookController.deleteBook);

module.exports = bookRouter;
