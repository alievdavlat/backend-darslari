
const jwt = require('jsonwebtoken')



module.exports = (req, res , next ) => {
  const { token  } = req.headers

  if(!token){
    return res.status(400).send("can't read token")
  }

  jwt.verify(token, "SECRET_KEY" , ( err, decode ) => {
    if (err instanceof jwt.TokenExpiredError) {
        return res.status(400).send('token invalid')
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(400).send('token not available')
    }

    req.userId = decode.id 
    next()
  })
  
}