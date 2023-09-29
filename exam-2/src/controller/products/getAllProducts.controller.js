import { read } from "../../utils/FS.js";

export const getAllProductsController = ( req, res ) => {
  try {

    const allProducts = read("products.json");
    
    res.status(200).send({
      status: 200,
      data: [
        ...allProducts
      ],
      msg: "OK"
    });
   
  } catch (error) {
    res.sendStatus(500);
  }
};


