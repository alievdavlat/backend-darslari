
import { read } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";


export const deleteProductMiddleware = ( req , res , next ) => {

  const { verifyId } = req
  const { id } = req.params

  const allUsers = read('users.json')
  const foundedUser = find(allUsers, 'id', verifyId)
                                
  if (!foundedUser && foundedUser.role != 'admin') {
      res.send('you cannot delete product')
      return
  }

  if (!id) {
      res.send('undefined reading id')
      return
  }
  
  
  req.productId = id
  next()
}