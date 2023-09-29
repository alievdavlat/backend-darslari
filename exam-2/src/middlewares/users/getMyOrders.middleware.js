
import { read  } from '../../utils/FS.js'

export const getMyOrdersMiddleware = ( req , res , next ) => {

  const { verifyId } = req
  const allOrders = read('orders.json')
  const allProducts = read('products.json')

  const foundedOrder = allOrders.filter(item => item.userId == verifyId)

  let arr = []

    for( let item of allProducts){
      foundedOrder.forEach( e => {
          if (item.id == e.productId) {
              arr.push(item)
          }
      });
    }
   
  req.products = arr
  next()
} 