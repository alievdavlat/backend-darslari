import { read } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";


export const fillingAccountMiddleware = ( req , res , next ) => {
  try {
    const { verifyId } = req;
    const { id } = req.params;
    const { total } = req.body;
    const allUsers = read("users.json");


    const foundedUser = find(allUsers, 'id', verifyId)
    if (verifyId != id) {
      res.send('ozini xisobni  toldr')
      return
  }

    if (!foundedUser) {
      res.status(404).send({
        status: 404,
        data: null,
        msg: "user hisob raqami topilmadi",
      });
    }
    if(typeof total == 'string' || typeof total == undefined || typeof total == NaN || typeof total == null){
      res.send('hisob toldirish uchun raqam ko\'rinishidegi m\'alumot  yozing ')
     return
    }

      req.total = total
      req.foundedUser = foundedUser
      req.allUsers = allUsers
      next()

  } catch (error) {
    res.sendStatus(error);
  }

}