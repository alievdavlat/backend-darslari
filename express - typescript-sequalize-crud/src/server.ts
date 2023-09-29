
import express, { Application } from 'express';
import 'dotenv/config'
import Routes from './Router/Routes';


let PORT = process.env.PORT || 3000


const app:Application = express()



app.use(express.json())

app.use(Routes)

app.listen(PORT, ():void => {
  console.log(`server run ${PORT}`);
  
})