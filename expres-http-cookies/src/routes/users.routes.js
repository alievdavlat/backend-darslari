import express from 'express'
import {USERS } from "../controllers/users.controller.js";
import { AUTH, LOGIN } from '../controllers/login.controller.js';
import { ADMIN } from '../controllers/admin.controller.js';
import { authMiddleware } from '../middlewares/auth.middlware.js'
import { verifyToken } from '../middlewares/verifyToken.middleware.js';
import { routeAccesMiddleware } from '../middlewares/routeAcces.middleware.js';
export  const userRouter = express.Router()


userRouter
.post('/login', [ routeAccesMiddleware , authMiddleware],LOGIN)
  .get('/users',[verifyToken, routeAccesMiddleware], USERS)
  .get('/login', AUTH)
  .get('/admin',[verifyToken, routeAccesMiddleware], ADMIN)
  
  
  