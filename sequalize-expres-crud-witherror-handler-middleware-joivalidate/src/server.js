import express from 'express'
import 'dotenv/config'
import sequalize from './config/sequalize.js'
import errorHandle from './middlewares/errorHandler.js'

import studentsRouter from './routes/students.routes.js'
import { CustomErrorHandler } from './errors/customErrorHandle.js'

let PORT  = process.env.PORT  || 1000

const app = express()

app.use(express.json())

app.use('*', (_ ,__, next) => next(new CustomErrorHandler('Given path not found', 404)))

app.use([
  studentsRouter
])


app.use(errorHandle)


sequalize.authenticate()
.then(() => console.log('db connected'))
.catch(err => new CustomErrorHandler(err.message ,  503))


app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
})