const express = require("express");
const jwt = require("jsonwebtoken");
const { SERVER_SECRET } = require("../middlewares/auth.mdw");
const { userService } = require("../services");

const authRouter = express.Router();

//Ruta para manejar el login
authRouter.post("/", async (req, res) => {
	// buscar si el usuario existe en la base de datos
	const user = await userService.validateUser(req.body);
	// si existe chequear el rol y generar el token con el nombre y el rol
	if (user) {
		const token = jwt.sign(
			{ username: user.username, role: user.role },
			SERVER_SECRET,
		);
		res.json({ token });
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
});

module.exports = authRouter;
