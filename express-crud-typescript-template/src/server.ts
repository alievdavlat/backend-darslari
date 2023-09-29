import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import data from './db/users.js'


const app: Application = express();
const PORT: Number | string = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.json())



app.get('/', (req: Request, res: Response) => {
  res.json(data);

});







app.listen(PORT, ():void => {
  console.log(`Server is running on PORT ${PORT}`);
});

