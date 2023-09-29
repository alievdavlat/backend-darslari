
import { DataTypes } from 'sequelize'
import sequalize from '../../config/sequalize.js'



export const studentsModel  =  sequalize.define('studentsModel', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: true,
    defaultValue: DataTypes.UUIDV4()
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: true
  }


}, {
  tableName: 'students'
})



