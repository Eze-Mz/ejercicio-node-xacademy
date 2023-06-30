const { libraryProvider, bookProvider } = require("../providers");

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

const addBookToLibrary = async (book, libraryId) => {
	const library = await libraryProvider.getLibraryById(libraryId);
	if (!library) return `La librería con id ${id} no existe`;
	const bookWithLibraryId = { ...book, LibraryId: libraryId };
	const newBook = await bookProvider.createBook(bookWithLibraryId);
	return newBook;
};

module.exports = {
	createLibrary,
	getLibraries,
	getLibraryById,
	updateLibrary,
	deleteLibrary,
	addBookToLibrary,
};
