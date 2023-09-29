import { Router } from "express";
import usersRouter from "./users/users.routes";


const mainRouter = Router()



export default mainRouter.use([
  usersRouter
])