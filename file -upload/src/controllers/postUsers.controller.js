
import { read , write } from "../utils/FS.js";

const postUsersController = ( req , res ) => {

 try {
  const { name } = req.body
  const { filename } = req.file


const allusers = read('users.json')
const foundUsers = allusers.find(user => user.name == name && user.img == filename)

if(foundUsers) res.sendStatus(401)

allusers.push({ 
  id:allusers.at(-1)?.id + 1 || 1,
  name,
  img: `/img/${filename}`,
  download:`/download/${filename}`
})
write('users.json', allusers)

return res.send('ok')
 } catch (error) {
  res.sendStatus(400);
 }
}

export default postUsersController