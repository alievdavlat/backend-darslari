const { Schema, default: mongoose } = require('mongoose')

const EmpployeesSchema =  new Schema({
  id: {
    type : Schema.Types.ObjectId
  },
  name :{
    type : String,
    max : [ 64, 'ism 64 harfdan oshmasligi kerak'],
    required : true
  },
  gender : {
    type : String,
    enum: ['male', 'female']
  },
  phone : {
    type : String,
    require: true
  }

}, { 
  collection : 'employees'
});


const employesModel = new mongoose.model('Employes', EmpployeesSchema)


module.exports = employesModel