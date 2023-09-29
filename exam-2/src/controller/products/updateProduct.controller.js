import { read , write } from "../../utils/FS.js";



export const updateProductsController = ( req , res ) => {
  try {
    const { productName, productPrice, productCount, foundedProduct, allProducts} = req


    foundedProduct.price = productPrice || foundedProduct.price
    foundedProduct.name = productName || foundedProduct.name
    foundedProduct.count = productCount || foundedProduct.count
    write("products.json", allProducts)
    res.send('ok')
  } catch (error) {
    res.sendStatus(500);
  }
}
