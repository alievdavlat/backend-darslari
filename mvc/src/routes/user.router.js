import { Router } from 'express'
import {getServerSideRendering} from '../controller/user.controller.js'

export const userRouter = Router()

 userRouter.get('/users', getServerSideRendering )





