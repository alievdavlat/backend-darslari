import { Router } from 'express'
import { login } from '../controllers/login.controller.js'
import { loginMiddleware } from '../middleware/login.middleware.js'
import { registerController } from '../controllers/register.controller.js'
import { registerMiddleware } from '../middleware/register.middleware.js'
import { getuserController } from '../controllers/getuser.controller.js'
import { getuserMiddleware } from '../middleware/getuser.middleware.js'
 export const authRouter = Router()

 

authRouter
.post('/login',loginMiddleware,  login)
.post('/register',registerMiddleware, registerController)
.get('/user',getuserMiddleware, getuserController)
