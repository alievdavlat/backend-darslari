import { DataTypes } from 'sequelize'

import { sequelize } from '../../config/sequalize.config.js'

 const Hospitals = sequelize.define( 'Hospitals',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull:false
  },
  name : {
    type : DataTypes.CHAR(64),
    allowNull:false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull:true,
    unique: true
  }
}, {
  tableName: 'hospitals'
}
)


export default Hospitals