
import express, { Application, NextFunction, Request, Response } from 'express'
import { typeOrm } from './config/typeorm.config'
import { errorHandlerMiddleware } from './errors/errorHandler.middleware'
import mainRouter from './routes/router'
import 'dotenv/config'
import { ErrorHandler } from './utils/errorHandler'
import swaggerUi from 'swagger-ui-express'
import doc from '../swagger.json'


const PORT :string | number = process.env.PORT || 3000

const app : Application = express()




  typeOrm
  .initialize()
  .then(() => console.log('db connected'))
  .catch(err => new ErrorHandler(err.message, 503))


  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc))



app.use(express.json())
app.use(mainRouter)
app.use(errorHandlerMiddleware)
app.use('/*', (_:Request, res:Response) => res.status(404).json(`<h1>иди нахер 😁</h1> </br> ---- <h2> Или пожалуйста иди нахуй 😎</h2> `) )





app.listen(PORT , ():void => {
  console.log(`server running on PORT ${PORT}`)
})
