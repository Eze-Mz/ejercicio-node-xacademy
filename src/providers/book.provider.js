const { Book } = require("../models");

const createBook = async (book) => {
	try {
		const newBook = await Book.create(book);
		return newBook;
	} catch (error) {
		console.error("Error al crear libro", error);
		throw error;
	}
};

const getBooks = async () => {
	try {
		const books = await Book.findAll();
		return books;
	} catch (error) {
		console.error("Error al buscar libros", error);
		throw error;
	}
};

const getBookById = async (id) => {
	try {
		const book = await Book.findByPk(id);
		return book;
	} catch (error) {
		console.error(`Error al buscar el libro con id ${id}`, error);
		throw error;
	}
};

const updateBook = async (updatedBook, id) => {
	try {
		const book = await Book.findByPk(id);
		if (book) {
			await Book.update(updatedBook, {
				where: {
					id: id,
				},
			});
			return book;
		} else {
			return `El libro con id ${id} no existe en la base de datos`;
		}
	} catch (error) {
		console.error(`Error al actualizar el libro con id ${id}`, error);
		throw error;
	}
};

const deleteBook = async (id) => {
	try {
		const success = await Book.destroy({
			where: {
				id: id,
			},
		});
		return success;
	} catch (error) {
		console.error(`Error al borrar la libería con id ${id}`, error);
		throw error;
	}
};

module.exports = {
	createBook,
	getBooks,
	getBookById,
	updateBook,
	deleteBook,
};
