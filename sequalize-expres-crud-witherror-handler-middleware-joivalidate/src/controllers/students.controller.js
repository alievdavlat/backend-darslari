import { CustomErrorHandler } from "../errors/customErrorHandle.js"
import { studentsModel } from "../model/index.js"
import { studentsPostValidations , studentsUpdateValidations} from "../utils/validation.js";
import { uuidChecker } from '../utils/regex.js'


export default {

 
  GETAll: async (_, res, next) => {
      const allStudents  = await studentsModel.findAll()
    console.log(allStudents.length);
      if (!allStudents.length) {
          return next(new CustomErrorHandler('usrers not found', 404))
      }

      res.json(allStudents)
  },

  CREATE_STUDENTS: async (req, res, next) => {
    
    const { error , value } = studentsPostValidations.validate(req.body)



    if (error) {
      return next(new CustomErrorHandler(error.message, 400))
    }

    if (!username || !password) {
      return next(new CustomErrorHandler('values required' , 400))
    }
    
   const newStudent = await studentsModel.create(value, {returning : true})
    .then(data => res.status(201).json(data))
    .catch(error => next(new CustomErrorHandler(error.message, 503)))
  
    if (newStudent) {
      res.json(newStudent)
    }
  },

  UPDATE_STUDENTS: async (req, res, next) => {
    const { error , value } = studentsUpdateValidations.validate(req.body)


    const { id }  = req.params

    if (!id) {
      return next(new CustomErrorHandler('id required', 400))
    }

    if (!id.match(uuidChecker)) {
      return next( new CustomErrorHandler('uuid format is invalid', 400))
    }

    if (error) {
      return next(new CustomErrorHandler(error.message, 400))
    }



    const foundedUser = await studentsModel.findOne({ where: { id } }) 


    if (!foundedUser) {
      return next(new CustomErrorHandler('user not found' , 404))
    }

    const updatedUser = await studentsModel.update(value, { where : { id }, returning : true })
    .then(data => res.status(200).json(data))
    .catch(error => next( new CustomErrorHandler(error.message, 503)))
  
    if(updatedUser){
      res.json(updatedUser)
    }

  },

  DELETE_STUDENTS: async (req, res, next) => {
    const { id } = req.params

    if (!id) {
      return next(new CustomErrorHandler('id required', 400))
    }


    if (!id.match(uuidChecker)) {
      return next( new CustomErrorHandler('uuid format is invalid', 400))
    }


    const foundedUser = await studentsModel.findOne({
      where: {
        id
      }
    }) 


    if (!foundedUser) {
      return next(new CustomErrorHandler('user not found' , 404))
    }

    const delletedUser = await studentsModel.destroy({
      where: {
        id
      },
      returning : true
    })

    res.json(delletedUser)
  }


}