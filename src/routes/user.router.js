const express = require("express");

const userRouter = express.Router();

const { userController } = require("../controllers");

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getUsers);

module.exports = userRouter;
