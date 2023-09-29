
import express from 'express';
import 'dotenv/config.js'
import router from './src/routes/index.js';

const app = express()

app.use(express.json())
app.use(router)

app.listen(8000, console.log('server running on port 8000'))

