
import express from 'express'
import fs from 'fs'
import path from 'path'
import usersRouter from './routes/user.routes.js'



const app = express()

app.use(express.json())
app.use(usersRouter)

app.listen(8000, console.log('server running on port : 8000'))