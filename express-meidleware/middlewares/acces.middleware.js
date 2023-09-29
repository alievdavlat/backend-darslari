const { sign } = require('../utils/jwt')
const {users} = require('../data')


module.exports = ( req , res , next ) => {
    const { name , password } = req.body

    const founduser = users.find(item => item.name == name && item.password == password)

    if (!founduser) {
        return res.sendStatus(401)
    }

    req.token = sign({ id: founduser?.id })
    next()

  }
  