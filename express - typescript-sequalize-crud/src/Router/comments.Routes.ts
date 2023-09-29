import { Router } from "express";
import commentsController from "../controllers/comments.controller";


const commentsRouters = Router()

      commentsRouters
                .get('/comments', commentsController.GET)
                .post('/comments', commentsController.POST)
                .put('/comments', commentsController.PUT)

export default commentsRouters