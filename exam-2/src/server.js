import express from 'express'
import 'dotenv/config'
import { auth } from './routes/auth.routes.js'
import { accesTokenMiddleware } from './middlewares/accesToken.middleware.js'
import { userRouter } from './routes/users.routes.js'
import { productsRouter } from './routes/products.routes.js'


const app = express()

app.use(express.json())
app.use(auth)

app.use(accesTokenMiddleware)
app.use(userRouter)
app.use(productsRouter)

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
})





 

