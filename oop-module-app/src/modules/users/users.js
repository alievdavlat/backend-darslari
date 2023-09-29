const model = require('./model')

module.exports = {

  GET: async ( req , res ) => {
    res.send(res.json( await model.getUsers()))
  }
}

