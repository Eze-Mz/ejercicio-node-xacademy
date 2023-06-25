const { libraryProvider } = require("../providers");

const createLibrary = async (library) => {
	return await libraryProvider.createLibrary(library);
};

const getLibraries = async () => {
	return await libraryProvider.getLibraries();
};

const getLibraryById = async (id) => {
	return await libraryProvider.getLibraryById(id);
};

const updateLibrary = async (updatedLibrary, id) => {
	return await libraryProvider.updateLibrary(updatedLibrary, id);
};

const deleteLibrary = async (id) => {
	return await libraryProvider.deleteLibrary(id);
};

module.exports = {
	createLibrary,
	getLibraries,
	getLibraryById,
	updateLibrary,
	deleteLibrary,
};
