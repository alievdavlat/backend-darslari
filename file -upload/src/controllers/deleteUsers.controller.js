import { read , write , deleteFile } from "../utils/FS.js";


const deleteUsersController = ( req, res ) => {
try {
  const { id } = req.params



  const allUsers = read('users.json')
  const deletedUsers = allUsers.find(user => user.id == +id)
  const updated = allUsers.filter( user => user.id != +id ) 
  deleteFile( String(deletedUsers.img.slice(5)))

  write('users.json', updated)

  return res.end('ok')

} catch (error) {
 res.sendStatus(400);
}
}

export default deleteUsersController