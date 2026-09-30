import express from "express";

import { registerUser } from "../controller/userController.js";
import { loginUser } from "../controller/userController.js";

const route = express.Router();
route.post("/register", registerUser);
route.post("/login", loginUser);

export default route;
