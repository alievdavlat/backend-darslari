const model = require('./model')
const {sign } = require('../../utils/jwt')
module.exports = {


  LOGIN: async ( req , res ) => {
    try {
        const { name, password } = req.body
          console.log( name, password );
        const user  = await model.login(name, password)

        if (!user) {
            return res.sendStatus(401);
        }

        const token  = sign({id:user.id })

        res.json({
          status:200,
          msg:'user successfuly loged in ',
          token
        });


    } catch (error) {
        res.sendStatus(500);
    }
  },

  TEACHER_GROUPS: async ( req , res ) => {
    try {

      const { verifyId } = req

      const groups = await model.teacherGroups(verifyId)
      res.json(groups);

    } catch (error) {
      res.sendStatus(500);
    }
  },

  STUDENTS_GROUPS: async ( req , res ) => {
    try {

      const { verifyId } = req
    
      const groups = await model.studentGrops(verifyId)
      res.json(groups);

    } catch (error) {
      res.sendStatus(500);
    }
  }


}