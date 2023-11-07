const express = require("express");
const { registerController, loginController, fetchAllUsersController } = require("../Controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const Router = express.Router();

Router.post("/login", loginController);
Router.post("/register", registerController);
Router.get("/fetchUsers", protect, fetchAllUsersController)

module.exports = Router;