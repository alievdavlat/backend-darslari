const express = require('express')
const app = express();
const mongo = require('./utils/mongo')


mongo()
.then(() => console.log('connected'))
.catch(err => console.log(err.message));



app.listen(8000, console.log(8000));