import { read } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";

export const getAccountMiddleware = (req, res, next) => {

try {
  const { verifyId } = req;
      
  const allusers = read("users.json");
  
  const foundedUser = find(allusers, 'id', verifyId)

  if (!foundedUser) {
    res.status(404).send({
      status: 404,
      data: null,
      msg: "user hisob raqami topilmadi",
    });
    return
  }
  
  req.foundedUser = foundedUser

  next()
} catch (error) {
  res.sendStatus(500);
}

}