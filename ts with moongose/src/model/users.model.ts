import mongoose from "mongoose";




const usersSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
  },
  name: {
    type:String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  status: {
    type: Number,
    required: true,
  }
})


const usersModel = mongoose.model('users', usersSchema)

export default usersModel


