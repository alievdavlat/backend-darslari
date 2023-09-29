
import { DataTypes } from 'sequelize'
import sequalize from '../../config/sequalize.js'



export const studentsCoursesModel  =  sequalize.define('studentsCoursesModel', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: true,
    defaultValue: DataTypes.UUIDV4()
  }
  
}, {
  tableName: 'students_courses'
})



