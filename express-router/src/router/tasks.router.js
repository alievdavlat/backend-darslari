import { Router } from "express";
import { taskGet } from "../controller/taskController.js";


export const tasksRouter  = Router()


tasksRouter.route('/')
  .get(taskGet)
  