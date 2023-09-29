import { read } from "../utils/Fs.js"


export const registerMiddleware = ( req , res , next ) => {


  const { username, password } = req.body

  const foundUser =  read('users.json').find(user => user.username == username && user.password == password)

  if (foundUser) {
    return res.status(400).send('user already registered')
  }


  next()

}