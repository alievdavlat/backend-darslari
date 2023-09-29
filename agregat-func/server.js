import express from 'express'
import { Pool } from 'pg'


const app = express()

app.use(express.json)

const pool = new Pool({
  host:'localhost',
  port:5432,
  user:'postgres',
  database:'n124',
  password:'aliev2002'
})




app.listen(8000, console.log(`server running on port 8000`))
