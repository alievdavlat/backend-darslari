import { read } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";

export const updateProductsMiddleware = (req, res, next) => {
  try {
    const { verifyId } = req;
    const { id } = req.params;
    const { name, price, count } = req.body;

    const allUsers = read("users.json");
    const foundedUser = find(allUsers, "id", verifyId);
    if (!foundedUser) {
      res.send({
        status: 400,
        data: null,
        msg: "bunday user mavjud emas",
      });
      return;
    }

    const allProducts = read("products.json");
    const foundedProducts = find(allProducts, "id", id);

    if (!foundedProducts) {
      res.send("Bunday mahsulot mavjud emas");
    }

    console.log( name, price, count);

    req.productName = name
    req.productPrice = price
    req.productCount = count
    req.foundedProduct = foundedProducts
    req.allProducts = allProducts
    next()

  } catch (error) {
    res.sendStatus(500);
  }
};
