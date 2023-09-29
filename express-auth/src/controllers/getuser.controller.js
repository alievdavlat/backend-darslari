
import { read } from "../utils/Fs.js";

export const getuserController = ( req , res ) => {
try {
  const { userId } = req

  
const foundedUser = read('users.json').find(user => user.id == userId )


res.json({
  status:200,
  data: foundedUser
})

} catch (error) {
  console.log(error.message);
  res.res.sendStatus(400);
}


}