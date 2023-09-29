import express from 'express'
import path from 'path'

const app = express()
import ejs from 'ejs'

import {userRouter}  from './routes/user.router.js'
app.set('views', path.join(path.resolve(), '/views'));

app.use(userRouter)
app.set('views', path.join(path.resolve(), 'src','/views'))
app.set('view engine', 'ejs')


//controllers





app.listen(9090, console.log('server running on port 9090'))