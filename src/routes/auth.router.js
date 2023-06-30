const express = require("express");
const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middlewares/auth.mdw");

const authRouter = express.Router();

//Ruta para manejar el login
authRouter.post("/", async (req, res) => {
	// buscar si el usuario existe en la base de datos

	// si existe chequear el rol y generar el token con el nombre y el rol
	const { username, password } = req.body;
	if (username === "admin" && password === "admin") {
		const token = jwt.sign({ username, role: "ADMIN" }, SERVER_SECRET);
		res.json({ token });
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
});

module.exports = authRouter;
