const express = require('express')
const router = require('./src/modules')
const app = express()

app.use(express.json())
app.use(router)

app.listen(8000, console.log(8000))