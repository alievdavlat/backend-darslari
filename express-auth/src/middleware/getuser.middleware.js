import jwt from 'jsonwebtoken'

export const getuserMiddleware = (req, res, next) => {

  const { token } = req.headers;

jwt.verify(token, process.env.SECRET_KEY, ( err , decode ) => {
  if (err instanceof jwt.TokenExpiredError) {
    return res.status(403).send('token invalid')
  }

  if (err instanceof jwt.TokenExpiredError) {
    return res.status(403).send('token not expired')
  }

  req.userId = decode.id

  next()
})


}