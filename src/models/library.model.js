const { DataTypes } = require("sequelize");
const { sequelize } = require("../db-config");
const Book = require("./book.model");

const Library = sequelize.define(
	"Library",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		telephone: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isNumeric: true,
			},
		},
	},
	{
		paranoid: true,
	},
);

Library.hasMany(Book);
Book.belongsTo(Library);

module.exports = Library;
