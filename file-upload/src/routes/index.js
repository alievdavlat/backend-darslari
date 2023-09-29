const express  = require('express')
const path = require('path')
const mainController = require('../controllers/mainController')
const uploadController = require('../controllers/upload.controller')
const multer = require('multer')
const uuid = require('uuid')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'src', 'assets', 'uploades'))
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4() + file.originalname)
  }
})
const upload = multer({storage})

const router = express.Router()

router
  .get('/', mainController.GET)
  .post('/', mainController.POST)
  .get('/messages', mainController.GET_MESSAGES)

  .get('/download', uploadController.GET)
  .post('/multer' , upload.single('image') , uploadController.UPLOAD_MULTER)
  .get('/users', mainController.GET_USERS)
  // .post('/upload', uploadController.UPLOAD)
  module.exports = router