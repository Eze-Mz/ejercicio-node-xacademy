const { userService } = require("../services");

const createUser = async (req, res) => {
	try {
		const newUser = await userService.createUser(req.body);
		res.json(newUser);
	} catch (error) {
		res.status(500).json({ action: "createUser", error: error.message });
	}
};

const getUsers = async (req, res) => {
	try {
		const users = await userService.getUsers();
		res.json(users);
	} catch (error) {
		res.status(500).json({ action: "getUsers", error: error.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const response = await userService.updateUser(req.body, req.params.userId);
		if (typeof response === "string") {
			res.status(404).json(response);
		} else {
			res.json(response);
		}
	} catch (error) {
		res.status(500).json({ action: "updateUser", error: error.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		const success = await userService.deleteUser(req.params.userId);
		console.log(success);
		if (success === 1) {
			return res.json("La librería se borró correctamente");
		} else {
			res.status(404).json("Hubo un error al borrar librería");
		}
	} catch (error) {
		res.status(500).json({ action: "deleteUser", error: error.message });
	}
};

module.exports = {
	createUser,
	getUsers,
	updateUser,
	deleteUser,
};
