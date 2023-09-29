import { Router } from "express";
import AuthController from "../controllers/Auth.controller";


const authRouter = Router()

  authRouter
          .post('/register', AuthController.REGISTER)
          .post('/login', AuthController.LOGIN)



export default authRouter