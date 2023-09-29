
import { read } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";

export const addProductsMiddleware = (req , res , next) => {
  try {
    const { verifyId } = req;
    const { name, price , count } = req.body;
    const allusers = read("users.json");
    const foundedUser = find(allusers,'id', verifyId )

    if (!foundedUser) {
      res.status(400).send("bunday user mavjud emas");
      return;
    }

    if (foundedUser.role != "admin") {
      res.send("productni faqat admin qosholadi");
      return
    }

    if (!name && !price && !count) {
      res.status(400).send({
        status: 400,
        data: null,
        msg: "ma'lumotlar xato kiritildi"
      });
      return
    }


  req.productName = name
  req.productPrice = price    
  req.productCount = count
  
  next()

  } catch (error) {
    res.sendStatus(500);
  }
}