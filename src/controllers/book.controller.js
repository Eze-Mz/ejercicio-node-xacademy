const { bookService } = require("../services");

const createBook = async (req, res) => {
	try {
		const newBook = await bookService.createBook(req.body);
		res.json(newBook);
	} catch (error) {
		res.status(500).json({ action: "createBook", error: error.message });
	}
};

const getBooks = async (req, res) => {
	try {
		const books = await bookService.getBooks();
		res.json(books);
	} catch (error) {
		res.status(500).json({ action: "getBooks", error: error.message });
	}
};

const getBookById = async (req, res) => {
	const id = req.params.bookId;
	try {
		const book = await bookService.getBookById(id);
		if (book) {
			res.json(book);
		} else {
			res.status(404).json(`libro con id ${id} no encontrado`);
		}
	} catch (error) {
		res.status(500).json({ action: "getBookyById", error: error.message });
	}
};

const updateBook = async (req, res) => {
	console.log("enter controller");
	try {
		const response = await bookService.updateBook(req.body, req.params.bookId);
		if (typeof response === "string") {
			res.status(404).json(response);
		} else {
			res.json(response);
		}
	} catch (error) {
		res.status(500).json({ action: "updateBook", error: error.message });
	}
};

const deleteBook = async (req, res) => {
	try {
		const success = await bookService.deleteBook(req.params.bookId);
		console.log(success);
		if (success === 1) {
			return res.json("El libro se borró correctamente");
		} else {
			res.status(404).json("Hubo un error al borrar el libro");
		}
	} catch (error) {
		res.status(500).json({ action: "deleteBook", error: error.message });
	}
};

module.exports = {
	createBook,
	getBooks,
	getBookById,
	updateBook,
	deleteBook,
};
