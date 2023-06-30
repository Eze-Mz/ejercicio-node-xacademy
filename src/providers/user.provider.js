const { User } = require("../models");

const createUser = async (user) => {
	try {
		const newUser = await User.create(user);
		return newUser;
	} catch (error) {
		console.error("Error al crear el usuario", error);
		throw error;
	}
};

const getUsers = async () => {
	try {
		const users = await User.findAll();
		return users;
	} catch (error) {
		console.error("Error al buscar los usuarios", error);
		throw error;
	}
};

const getUserById = async (id) => {
	try {
		const user = await User.findByPk(id);
		return user;
	} catch (error) {
		console.error(`Error al buscar el usuario con id ${id}`, error);
		throw error;
	}
};

const updateUser = async (updatedUser, id) => {
	try {
		const user = await User.findByPk(id);
		if (user) {
			await User.update(updatedUser, {
				where: {
					id: id,
				},
			});
			return user;
		} else {
			return `El usuario con id ${id} no existe en la base de datos`;
		}
	} catch (error) {
		console.error(`Error al actualizar el usuario con id ${id}`, error);
		throw error;
	}
};

const deleteUser = async (id) => {
	try {
		const response = await User.destroy({
			where: {
				id: id,
			},
		});
		return response;
	} catch (error) {
		console.error(`Error al borrar el usuario con id ${id}`, error);
		throw error;
	}
};

const validateUser = async (userCredentials) => {
	try {
		const user = await User.findAll({
			where: {
				email: userCredentials.user,
				password: userCredentials.pass,
			},
		});
		if (user.length !== 0) {
			return user;
		}
		return false;
	} catch (err) {
		console.error("Error when validating User", err);
		return false;
	}
};

module.exports = {
	createUser,
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
};
