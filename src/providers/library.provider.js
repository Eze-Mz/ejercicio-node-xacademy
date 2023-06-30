const { Library } = require("../models");

const createLibrary = async (library) => {
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
		const libraries = await Library.findAll({ include: { all: true } });
		return libraries;
	} catch (error) {
		console.error("Error al buscar liberías", error);
		throw error;
	}
};

const getLibraryById = async (id) => {
	try {
		const library = await Library.findByPk(id, { include: { all: true } });
		return library;
	} catch (error) {
		console.error(`Error al buscar libería con id ${id}`, error);
		throw error;
	}
};

const updateLibrary = async (updatedLibrary, id) => {
	try {
		const library = await Library.findByPk(id);
		if (library) {
			await Library.update(updatedLibrary, {
				where: {
					id: id,
				},
			});
			return library;
		} else {
			return `La librería con id ${id} no existe en la base de datos`;
		}
	} catch (error) {
		console.error(`Error al actualizar libería con id ${id}`, error);
		throw error;
	}
};

const deleteLibrary = async (id) => {
	try {
		const success = await Library.destroy({
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
	createLibrary,
	getLibraries,
	getLibraryById,
	updateLibrary,
	deleteLibrary,
};
