import jwt from 'jsonwebtoken'

export const verifyToken = ( req, res , next ) => {
  const { token } = req.cookies
  jwt.verify(token, process.env.SECRET_KEY, (err , decode ) => {
    if (err instanceof jwt.TokenExpiredError ) {
        return res.redirect('/login')
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.redirect('/login')
    }

    const { id , role } = decode 
    req.role = role
    req.id = id 
    next()
  })

}