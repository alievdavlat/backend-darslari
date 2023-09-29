
export const getMyOrdersController = ( req , res ) => {
const { products } = req


res.status(200).send({
  status:200,
  data:products,
  msg:"OK"
})


}