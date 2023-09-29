import express from 'express'
import 'dotenv/config'
import { authRouter } from './routes/auth.router.js'


const app = express();
app.use(express.json())
app.use(authRouter)

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});

