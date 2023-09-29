const express = require('express');
const path = require('path')
const ejs = require('ejs')
const router = require('./routes')
// const fileUpload = require('express-fileupload')



const app = express();



app.use(express.json())
// app.use(fileUpload({
//   tempFileDir:path.join(process.cwd(), 'src','assets', 'uploades')
// }))
app.use(express.urlencoded( { extended: true }))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use('/images',express.static( path.join(__dirname, 'images')))
app.use('/assets',express.static( path.join(__dirname, 'assets')))
app.use('/assets',express.static( path.join(__dirname, 'uploades')))

app.use(router)
app.use('/*', (_ , res ) => res.sendStatus(404))


app.listen(8000, () => {
  console.log('app listening on port  8000!');
});

