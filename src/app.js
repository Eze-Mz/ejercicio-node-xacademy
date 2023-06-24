const express = require("express");
const { initializeDB } = require("./db-config")
const { bookRouter, libraryRouter, userRouter } = require("./routes")

const PORT = 8000;

const app = express()

//Middlewares
app.use(express.json())

app.use("/library", libraryRouter);



app.listen(PORT, async () => {
    await initializeDB();
    console.log(`server is running on port ${PORT}`);
})