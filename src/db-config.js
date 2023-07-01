const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: "./database.sqlite",
});

const initializeDB = async () => {
	try {
		await sequelize.authenticate();
		console.log("Conexión a la base de datos establecida");
		await sequelize.sync({ force: true });
	} catch (error) {
		console.error("Error al inicializar la base de datos", error);
	}
};

const createUsersOnStart = async () => {
	try {
		const User = require("./models/user.model");
		await User.build({
			username: "admin",
			password: "admin",
			role: "ADMIN",
		}).save();
		await User.build({
			username: "pepe",
			password: "pepe",
		}).save();
	} catch (error) {
		console.error("Error al crear el usuario admin", error);
	}
};

module.exports = { sequelize, initializeDB, createUsersOnStart };
