import jwt from 'jsonwebtoken'

 const sign = payload => {
  return jwt.sign(payload, 'JUDAYAM_SECRET_KEY',{
    expiresIn:'24h'
  })
}

const verify = token => jwt.verify(token ,'JUDAYAM_SECRET_KEY' )


export  {
  sign,
  verify
}

