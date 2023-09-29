import { Router  } from "express";
import studentsController from "../controllers/students.controller.js";

const studentsRouter = Router()

studentsRouter
      .post('/students',studentsController.CREATE_STUDENTS )
      .get('/students', studentsController.GETAll)
      .put('/students/:id', studentsController.UPDATE_STUDENTS)
      .delete('students/:id', studentsController.DELETE_STUDENTS)

export default studentsRouter