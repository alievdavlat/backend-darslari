import { Router } from "express";
import postUsersController from "../controllers/postUsers.controller.js";
import upload from "../utils/multer.js";
import getUsersController from "../controllers/getUsers.controller.js";
import updateUsersController from "../controllers/updateUsers.controller.js";
import deleteUsersController from "../controllers/deleteUsers.controller.js";
import readImgController from "../controllers/readImg.controller.js";
import downloadImgController from "../controllers/downloadImg.controller.js";

const usersRouter =  Router()

usersRouter
  .get('/', getUsersController)
  .post('/postUsers',upload.single('img'),postUsersController )
  .put('/updateUsers/:id',upload.single('img'),updateUsersController)
  .delete('/deleteUsers/:id', deleteUsersController)
  .get('/img/:file', readImgController)
  .get('/download/:file', downloadImgController)



  export default usersRouter



  