import express from 'express'
import {HospitalsBranchesRouter, HospitalsRouter} from './routes/index.js'



const app = express()

app.use(express.json())

app.get('/', (req , res ) => {
  res.send('sequalize with expres js')
})

app.use([
  HospitalsRouter,
  HospitalsBranchesRouter
])

app.listen(9090, console.log('server running on pport 9090'))