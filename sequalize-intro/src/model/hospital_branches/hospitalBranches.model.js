
import { DataTypes } from 'sequelize'

import { sequelize } from '../../config/sequalize.config.js'




const Hospital_branches =  sequelize.define('Hospital_branches', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
  name : {
    type: DataTypes.CHAR(70),
    allowNull:false
  }
}, {
  tableName: 'hospitals_branches'
})


export default  Hospital_branches