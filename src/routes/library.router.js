const express = require("express");

const libraryRouter = express.Router();

const { libraryController } = require("../controllers");
const { authMiddleware } = require("../middlewares/auth.mdw");

libraryRouter.post("/", authMiddleware, libraryController.createLibrary);
libraryRouter.post("/:libraryId/book", libraryController.addBookToLibrary);
libraryRouter.get("/", libraryController.getLibraries);
libraryRouter.get("/:libraryId", libraryController.getLibraryById);
libraryRouter.put("/:libraryId", libraryController.updateLibrary);
libraryRouter.delete("/:libraryId", libraryController.deleteLibrary);

module.exports = libraryRouter;
