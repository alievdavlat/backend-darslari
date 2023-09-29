
import {sign} from '../utils/jwt.js'


 export const login = (req , res  ) => {
    try {
     const {userId} = req
     
      const token = sign( { userId})

      res.send({
        status:200,
        token,
        msg :"user successfuly loged in"
      })
      
    } catch (error) {

      console.log(error.message);
      res.sendStatus(500);
    }

 }