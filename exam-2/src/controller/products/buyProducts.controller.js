import { read, write } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";


export const buyProductsController = (req, res) => {
  try {
    const { verifyId } = req;
    const { productId, productCount, productName, productPrice } = req;
  
    const allUser = read("users.json");
    const foundedUser = find(allUser, 'id', verifyId)
        
    if (foundedUser.account < productPrice) {
      res.send("mablag' yetarli emas");
      return;
    }


    const allOrder = read("orders.json");
    const foundedOrder = allOrder.find(order => order.name == productName && order.userId == verifyId )
    if (!foundedOrder) {
      allOrder.push({
        id: allOrder.at(-1)?.id + 1 || 1,
        name: productName,
        count: productCount,
        price: productPrice,
        productId,
        userId: foundedUser.id,
      });
    }else{
      foundedOrder.price = foundedOrder.price + productPrice
      foundedOrder.count = foundedOrder.count + productCount
    }
    write("orders.json", allOrder);
   
    foundedUser.account = foundedUser.account - productPrice
    write('users.json', allUser)
    
    res.status(201).send({
      status: 201,
      data: {
        id:productId,
        name: productName,
        count:productCount,
      },
      msg: "CREATED",
    });

  } catch (error) {
    res.sendStatus(500);
  }
};
