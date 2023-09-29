import jwt, { verify } from "jsonwebtoken";


export const accesTokenMiddleware = (req, res, next) => {
  const { token } = req.headers

  verify(token ,process.env.SECRET_KEY, (err , decode ) => {
    if( err instanceof jwt.JsonWebTokenError){
      return res.send('invalid')
    }

    if(err instanceof jwt.TokenExpiredError ){
      return res.send('expired')
    }
    req.verifyId =  decode.id
    next()
  })

}

