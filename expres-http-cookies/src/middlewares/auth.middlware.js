import { read, write } from '../utils/FS.js'


export const authMiddleware = ( req ,res , next ) => {
  const { name , password } = req.body;

  const foundUsers = read('users.json').find(user => user.name == name && user.password == password )

  if (!foundUsers) {
    return res.sendStatus(401)
  }

  
  req.userId = foundUsers.id
  req.role = foundUsers.role
  
  next()
}