const mongoose = require('mongoose')

const mongo = async () => {
  await mongoose.connect('mongodb://localhost:27017/n124')

}

module.exports = mongo


//mongodb+srv://alievdavlat024:aliev2002@cluster0.ibyzof3.mongodb.net/?retryWrites=true&w=majority