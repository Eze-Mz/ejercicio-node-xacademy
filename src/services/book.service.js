const { bookProvider, libraryProvider } = require("../providers");

const createBook = async (book) => {
	const libraryId = book.LibraryId;
	if (!libraryId) return "LibraryId is required";
	const library = await libraryProvider.getLibraryById(libraryId);
	if (!library) return "Library not found";
	return await bookProvider.createBook(book);
};

const getBooks = async () => {
	return await bookProvider.getBooks();
};

const getBookById = async (id) => {
	return await bookProvider.getBookById(id);
};

const updateBook = async (updatedBook, id) => {
	return await bookProvider.updateBook(updatedBook, id);
};

const deleteBook = async (id) => {
	return await bookProvider.deleteBook(id);
};

module.exports = {
	createBook,
	getBooks,
	getBookById,
	updateBook,
	deleteBook,
};
