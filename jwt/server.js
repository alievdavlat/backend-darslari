const http = require('http')
require('dotenv').config()
const port  = process.env.PORT || 3000
const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY 

const server = http.createServer()

server.on('request', (req, res) => {

const url =req.url.split('/')[1]
  
  if(req.method == 'POST' && url == 'login'){
      res.end(jwt.sign({id:1, name:'serpat'}, SECRET_KEY, {expiresIn:'20s'}))
      return
  }

  if (req.method == 'GET' && url == 'users') {
    const { token } = req.headers
    
    jwt.verify(token, SECRET_KEY, (err , decoded) => {

      if(err instanceof jwt.TokenExpiredError){
          res.end('token amal qlish mudati eskirdi')
          return
      }
       if( err instanceof jwt.JsonWebTokenError){
        res.end('sibalsa tori token ber nx')
        return
       }
       res.end('togri')
    })

    return
  }
  




})



server.listen(port, () => {
  console.log(`server running on port : ${port}`);
})