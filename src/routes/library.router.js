const express = require("express");

const libraryRouter = express.Router();

const { libraryController } = require("../controllers");
const { userIsAdminMDW } = require("../middlewares/auth.mdw");

libraryRouter.post("/", userIsAdminMDW, libraryController.createLibrary);
libraryRouter.post("/:libraryId/book", libraryController.addBookToLibrary);
libraryRouter.get("/", libraryController.getLibraries);
libraryRouter.get("/:libraryId", libraryController.getLibraryById);
libraryRouter.put(
	"/:libraryId",
	userIsAdminMDW,
	libraryController.updateLibrary,
);
libraryRouter.delete(
	"/:libraryId",
	userIsAdminMDW,
	libraryController.deleteLibrary,
);

module.exports = libraryRouter;
