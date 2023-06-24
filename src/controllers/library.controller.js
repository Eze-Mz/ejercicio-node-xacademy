const { libraryService } = require("../services");

const createLibrary = async (req, res) => {
	try {
		const newLibrary = await libraryService.createLibrary(req.body);
		res.json(newLibrary);
	} catch (error) {
		res.status(400).json({ action: "createLibrary", error: error.message });
	}
};

const getLibraries = async (req, res) => {
	try {
		const libraries = await libraryService.getLibraries();
		res.json(libraries);
	} catch (error) {
		res.status(400).json({ action: "getLibraries", error: error.message });
	}
};

const getLibraryById = (req, res) => {};

module.exports = {
	createLibrary,
	getLibraries,
	getLibraryById,
};
