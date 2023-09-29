import express from 'express'
import ejs from 'ejs'
import path from 'path'
import {userRouter} from './routes/users.routes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

const app = express()

dotenv.config()
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.set('views', path.join(path.resolve(), 'src','/views'))

app.use(cookieParser())
app.use(userRouter)

app.listen(8000, console.log('server running on port 8000'))