import { write, read } from "../utils/Fs.js";

export const registerController = ( req , res ) => {
  try {
    const { username , password } = req.body
    const allData = read('users.json')
    allData.push({id:allData.at(-1)?.id + 1 || 1, username, password })
    write('users.json', allData)
  } catch (error) {
    console.log(error.message);
    res.sendStatus(401)
  }
}