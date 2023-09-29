const jwt = require('jsonwebtoken')


 const sign = payload => {
  return jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn:'48h'
  })
}

module.exports = {
  sign
}


