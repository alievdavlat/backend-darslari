import express, { Application } from 'express';
import 'dotenv/config'
import Userrouter from './routes/users.routes';


const app:Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api' ,[
  Userrouter
])

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
