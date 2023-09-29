import express, { Application } from 'express'
import { errohandle } from './middlewares/errorHandler'
import mainRouter from './routes/routes'
import mongo from './config/mongo'
import 'dotenv/config'
import { PORT } from './types/types'
import { any } from 'joi'



const PORT: PORT = process.env.PORT || 9000

const app: Application = express()

app.use(express.json())

app.use(mainRouter)

app.use(errohandle)



mongo()
    .then(() => console.log('Connected'))
    .catch(err => console.log(err))

    
app.listen(PORT, (): void => {
    console.log(PORT)
})



