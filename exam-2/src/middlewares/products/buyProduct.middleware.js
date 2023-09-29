import { read, write } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";

export const buyProductsMiddleware = (req, res, next) => {
  const { count } = req.body;
  const { id } = req.params;
  const allProducts = read("products.json");


  const foundedProduct = find(allProducts, 'id', id)


  if (!foundedProduct && !count && foundedProduct.count < count) {
    return res.status(400).send({
      status: 400,
      data: null,
      msg: "Ma'lumot xato kiritildi",
    });
  }

  foundedProduct.count  = foundedProduct.count - count;
  write('products.json', allProducts)

  req.productId = foundedProduct.id
  req.productName  = foundedProduct.name
  req.productPrice = foundedProduct.price
  req.productCount = count
  next()
};
