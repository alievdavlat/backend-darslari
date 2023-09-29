 const express = require('express');
require('dotenv').config()
const cors = require('cors')
const {router} = require('./src/routes/routes')
const app = express();


app.use(express.json())
app.use(cors())
app.use(router)

app.listen(process.env.PORT, () => {
console.log(`server listening on port ${process.env.PORT}!`);
});

