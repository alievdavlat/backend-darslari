import { read, write } from "../../utils/FS.js";
import { find } from "../../utils/crud.js";


export const addProductsController = (req, res) => {
  try {
    const {  productName, productPrice, productCount} = req

      const allProducts = read("products.json");
      const foundedProducts = find(allProducts, 'name', productName)

      if (!foundedProducts) {
        allProducts.push({
          id: allProducts.at(-1)?.id + 1 || 1,
          name:productName,
          price:productPrice,
          count:productCount
        });

        write("products.json", allProducts);
        res.status(201).send({
          status: 201,
          data: {
            id: allProducts.at(-1)?.id,
            name,
            price,
            count,
          },
          msg: "CREATED",
        });
        return;
      }

      foundedProducts.price = productPrice;
      foundedProducts.count = foundedProducts.count + productCount;
      write("products.json", allProducts);
      res.status(201).send({
        status: 201,
        data: {
          id: foundedProducts.id,
          productName,
          price: foundedProducts.price,
          count: foundedProducts.count,
        },
        msg: "CREATED",
      });
   

  } catch (error) {
    res.sendStatus(500);
  }
};
