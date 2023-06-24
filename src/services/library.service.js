const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
	return await libraryProvider.createLibrary(library);
};

const getLibraries = async () => {
	return await libraryProvider.getLibraries();
};

module.exports = { createLibrary, getLibraries };
