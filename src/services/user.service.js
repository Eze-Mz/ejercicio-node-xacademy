const { userProvider } = require("../providers");

const createUser = async (user) => {
	return await userProvider.createUser(user);
};

const getUsers = async () => {
	return await userProvider.getUsers();
};

const validateUser = async (userCredentials) => {
	return await userProvider.getUserByNameAndPassword(userCredentials);
};

const updateUser = async (updatedUser, id) => {
	return await userProvider.updateUser(updatedUser, id);
};

const deleteUser = async (id) => {
	return await userProvider.deleteUser(id);
};

module.exports = {
	getUsers,
	createUser,
	validateUser,
	updateUser,
	deleteUser,
};
