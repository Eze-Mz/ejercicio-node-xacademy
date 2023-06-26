const { bookProvider } = require("../providers");

const createBook = async (book) => {
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
