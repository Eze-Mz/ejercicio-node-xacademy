const express = require("express");

const libraryRouter = express.Router();

const { libraryController } = require("../controllers");

libraryRouter.post("/", libraryController.createLibrary);
libraryRouter.get("/", libraryController.getLibraries);
libraryRouter.get("/libraryId", libraryController.getLibraryById);

module.exports = libraryRouter;
