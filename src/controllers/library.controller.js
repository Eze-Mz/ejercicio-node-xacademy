const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
	try {
		const newLibrary = await libraryService.createLibrary(req.body);
		res.json(newLibrary);
	} catch (error) {
		res.status(500).json({ action: "createLibrary", error: error.message });
	}
};

const getLibraries = async (req, res) => {
	try {
		const libraries = await libraryService.getLibraries();
		res.json(libraries);
	} catch (error) {
		res.status(500).json({ action: "getLibraries", error: error.message });
	}
};

const getLibraryById = async (req, res) => {
	try {
		const library = await libraryService.getLibraryById(req.params.libraryId);
		res.json(library);
	} catch (error) {
		res.status(500).json({ action: "getLibraryById", error: error.message });
	}
};

const updateLibrary = async (req, res) => {
	try {
		const library = await libraryService.updateLibrary(
			req.body,
			req.params.libraryId,
		);
		if (typeof library === "string") {
			res.status(404).json(library);
		} else {
			res.json(library);
		}
	} catch (error) {
		res.status(500).json({ action: "updateLibrary", error: error.message });
	}
};

const deleteLibrary = async (req, res) => {
	try {
		const success = await libraryService.deleteLibrary(req.params.libraryId);
		console.log(success);
		if (success === 1) {
			return res.json("La librería se borró correctamente");
		} else {
			res.status(404).json("Hubo un error al borrar librería");
		}
	} catch (error) {
		res.status(500).json({ action: "deleteLibrary", error: error.message });
	}
};

module.exports = {
	createLibrary,
	getLibraries,
	getLibraryById,
	updateLibrary,
	deleteLibrary,
};
