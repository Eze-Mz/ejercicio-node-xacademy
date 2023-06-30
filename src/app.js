const express = require("express");
const { initializeDB } = require("./db-config");
const {
	bookRouter,
	libraryRouter,
	userRouter,
	authRouter,
} = require("./routes");
const User = require("./models/user.model");

const PORT = 8000;

const app = express();

//Middlewares
app.use(express.json());

app.use("/book", bookRouter);
app.use("/library", libraryRouter);
app.use("/user", userRouter);
//Ruta para manejar el login
app.use("/login", authRouter);

app.listen(PORT, async () => {
	await initializeDB();
	User.build({ name: "admin", password: "admin", role: "ADMIN" }).save();
	console.log(`server is running on port ${PORT}`);
});
