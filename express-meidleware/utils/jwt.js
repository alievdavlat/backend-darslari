const jwt = require('jsonwebtoken')


const sign = payload => {
 return jwt.sign(payload, "SECRET_KEY", {
    expiresIn:"20s"
  })
}

module.exports = {
  sign
}