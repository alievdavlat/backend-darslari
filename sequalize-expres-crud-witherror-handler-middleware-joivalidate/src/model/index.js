import sequalize from "../config/sequalize.js";
import { coursesModel } from './courses/courses.model.js'
import { studentsModel } from './students/student.model.js'
import { studentsCoursesModel } from  './studentsCourses/StudentsCourses.model.js'

studentsModel.belongsToMany(coursesModel, { through : studentsCoursesModel})
coursesModel.belongsToMany(studentsModel, { through : studentsCoursesModel})



sequalize.sync({alter: true})



export {
  coursesModel, 
  studentsModel,
  studentsCoursesModel
}