import jwt from 'jsonwebtoken'

 const sign = payload => {
  return jwt.sign(payload, process.env.SECRET_KEY,{
    expiresIn:'24h'
  })
}




const verify = token => {
 const {id} =  jwt.verify(token, process.env.SECRET_KEY)
 return id
}


export {
  sign,
  verify
}