const model = require('./model')
const {sign } = require('../../utils/jwt')
module.exports = {


  GROUP_STUDENTS: async ( req , res ) => {
    try {

      // const { verifyId } = req
      const { id } = req.params
      const groupStudents = await model.groupStudents(id)
      res.json(groupStudents)

    } catch (error) {
        res.sendStatus(500);
    }
  },


  HOMEWORKS: async ( req , res ) => {
    try {

      // const { verifyId } = req
      const { id } = req.params

      const homework = await model.homework(id)
      res.json(homework);

    } catch (error) {
      res.sendStatus(500);
    }
  },


}