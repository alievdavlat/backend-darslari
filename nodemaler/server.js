const http = require('http')
const mail = require('./utils/mail')

require('dotenv').config()

const PORT = process.env.PORT || 4000


const server = http.createServer()

server.on('request', async(req, res) => {

  if(req.method == "POST"){
    req.on('data',async chunk => {
      const { message, email } = JSON.parse(chunk)
      await mail(message, email)
      

    })
  }
  res.end("OK")
})


server.listen(PORT , () => console.log(`server running on port ${PORT}`))

