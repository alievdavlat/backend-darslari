import { read , write } from '../../utils/FS.js'
import { deleteById, find } from '../../utils/crud.js'

export const  deleteProductController = (req, res) => {


  try {
    
    const { productId } = req

  
    const allProducts = read('products.json')
    const allOrders = read('orders.json')

    const foundedProducts = find(allProducts, 'id', productId)
    if (!foundedProducts) {
        res.status(404).send('product not found')
        return
    }

    

    const updatedProducts = deleteById(allProducts,'id' ,productId)
    write('products.json', updatedProducts)

    const foundedOrder  =  find(allOrders,'productId', productId )
                 
      if (foundedOrder) {    
          const updatedOrders = deleteById(allOrders,"productId", productId )
          write('orders.json', updatedOrders)
      }

      res.status(202).send({
        status: 202,
        data: {
          id:productId,
          name:foundedProducts.name,
          price: foundedProducts.price,
          count:foundedProducts.count
        },
        msg:' product successfuly deleted'
      })


  } catch (error) {
    res.sendStatus(500);
  }

} 