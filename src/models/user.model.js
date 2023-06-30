const { DataTypes } = require("sequelize");
const { sequelize } = require("../db-config");

const User = sequelize.define("Users", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
		type: DataTypes.STRING,
		defaultValue: "USER",
	},
});

module.exports = User;
