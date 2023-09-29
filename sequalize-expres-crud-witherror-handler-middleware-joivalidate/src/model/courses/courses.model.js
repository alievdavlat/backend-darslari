
import { DataTypes } from 'sequelize'
import sequalize from '../../config/sequalize.js'



export const coursesModel  =  sequalize.define('coursesModel', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: true,
    defaultValue: DataTypes.UUIDV4()
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.TEXT,
    allowNull:true
  }


}, {
  tableName: 'courses'
})



