
import { login } from '../users/users.model.js'
import { sign } from '../../utils/jwt.js'

export const Login = async ( req , res ) => {
  try {
    
    const { name, password } = req.body

    const user = await login(name, password)

    if(!user) {
     res.status(401).json({
        status:401,
        message:'USER NOT FOUND',
      } )
      return
    }

      const token  = sign({id:user?.id, name})

      res.json({
        status:200,
        msg:'user successfuly loged in',
        token
      })
      
    
  } catch (error) {
    console.log(error.message);
  }
}


