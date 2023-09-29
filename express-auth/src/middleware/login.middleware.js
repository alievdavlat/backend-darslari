import { read  } from '../utils/Fs.js'


export const loginMiddleware = (req, res, next) => {
try {
  const { username, password } = req.body;

  const foundedUser = read('users.json').find( user  => user.username == username && user.password == password );
  if (!foundedUser) {
    return res.status(401).send('user not found')
  }

  req.userId = foundedUser.id ; 

  next()

} catch (error) {
  console.log(err.message);
  req.res.sendStatus(400);
}


}