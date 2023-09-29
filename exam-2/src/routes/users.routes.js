
import { Router } from "express";
import { getAccountController } from "../controller/users/getAccount.controller.js";
import { accountFillingController } from "../controller/users/fillingAccount.controller.js";
import { getMyOrdersMiddleware } from "../middlewares/users/getMyOrders.middleware.js";
import { getMyOrdersController } from "../controller/users/getMyOrders.controller.js";
import { fillingAccountMiddleware } from "../middlewares/users/fillingAccount.middleware.js";
import { getAccountMiddleware } from "../middlewares/users/getAccount.middleware.js";


export const userRouter = Router()


  userRouter
      .get('/user/:account',getAccountMiddleware, getAccountController)
      .get('/getOrders', getMyOrdersMiddleware, getMyOrdersController)
      .put('/user/:id/account',fillingAccountMiddleware, accountFillingController)