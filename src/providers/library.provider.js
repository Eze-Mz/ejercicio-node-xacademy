const { Library } = require("../models");

const createLibrary = async (library) => {
	console.log("FROM PROVIDER!!");
	try {
		const newLibrary = await Library.create(library);
		return newLibrary;
	} catch (error) {
		console.error("Error al crear librería", error);
		throw error;
	}
};

const getLibraries = async () => {
	try {
		const libraries = await Library.findAll();
		return libraries;
	} catch (error) {
		console.error("Error al buscar liberías", error);
		throw error;
	}
};

module.exports = { createLibrary, getLibraries };
