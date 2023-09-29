import { read  } from '../../utils/FS.js'
import bcrypt from 'bcrypt'
import { find } from '../../utils/crud.js'

export const registerMiddleware = async ( req , res , next ) => {
 try {
  const { username , password, role = 'user' } = req.body
  const allUsers = read('users.json')

  const foundedUser = find(allUsers, 'username', username)

  if (role === 'admin') {
    res.send('You cannot register as a user')
    return
}

    if(foundedUser){
      const isValidPassword = await bcrypt.compare(password, foundedUser.password) 
      if (foundedUser && isValidPassword) {
        res.status(400).send(
          {
            status: 400,
            data: null,
            msg: "Bu username allaqachon band qilingan"
          }
        )
        return
      }
    }

   
    
      req.userPassword = password,
      req.userName  = username
      req.role = role
      next()

    } catch (error) {
       res.sendStatus(500);
 }
} 