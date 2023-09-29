import { read } from '../utils/FS.js'

const getUsersController = ( req , res ) => {
 try {
  const allUsers = read('users.json')
 return res.json(allUsers)
 } catch (error) {
  res.sendStatus(400);
 }

}

export default getUsersController