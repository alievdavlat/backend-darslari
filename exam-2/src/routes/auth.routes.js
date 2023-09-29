import { Router } from "express";
import { loginMiddlware } from "../middlewares/auth/login.middleware.js";
import { loginController } from "../controller/auth/login.controller.js";
import { registerMiddleware } from "../middlewares/auth/register.middlware.js";
import { registerController } from "../controller/auth/register.controller.js";
export const auth = Router();

auth
  .post("/signup", registerMiddleware, registerController)
  .post("/signin", loginMiddlware, loginController);
