import { Router } from "express";
import { addProductsController } from "../controller/products/addProdducts.controller.js";
import { getAllProductsController } from "../controller/products/getAllProducts.controller.js";
import { buyProductsMiddleware } from "../middlewares/products/buyProduct.middleware.js";
import { buyProductsController } from "../controller/products/buyProducts.controller.js";
import { deleteProductMiddleware } from "../middlewares/products/deleteProduct.middleware.js";
import { deleteProductController } from "../controller/products/deleteProduct.controller.js";
import { addProductsMiddleware } from "../middlewares/products/addProducts.middleware.js";
import { updateProductsMiddleware } from "../middlewares/products/updateProducts.middleware.js";
import { updateProductsController } from "../controller/products/updateProduct.controller.js";
    

export const productsRouter = Router()

productsRouter
    .post('/products', addProductsMiddleware, addProductsController)
    .post('/products/:id/buy', buyProductsMiddleware, buyProductsController)
    .get('/products', getAllProductsController)
    .delete('/products/delete/:id', deleteProductMiddleware, deleteProductController)
    .put('/products/update/:id', updateProductsMiddleware, updateProductsController)


