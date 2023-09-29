const bcrypt = require('bcrypt')

console.log(bcrypt.hashSync('aliev', 10));
 const http = require("http");
const data = require('./data');



const server = http.createServer((req, res) => {

  const url = req.url.split('/')[1]
  const url2 = req.url.split('/')[2]
 

  if(req.method == "GET"){
    if(url == 'users'){
      res.writeHead(200, {"Content-type":"application/json"})
      res.end(JSON.stringify(data))
      return
    }

   return res.end('dinay quy getdan')
  }

  if (req.method == "POST") {
    if(url == "newUser"){  
        res.on('data', (chunk) => {
          const { name } = JSON.parse(chunk)
          data.push({id:data[data.length - 1]?.id + 1} || 1, name)
          
        })
        return res.end('created new user')

    }
  }

  if (req.method == "PUT") {
    if(url == "updateUser"){
        const foundUser = data.find(user => user.id == url2)
        
          if(!foundUser){
            res.writeHead(400, {"Content-type":"application/json"})
            res.end(JSON.stringify({
              message:'yogakan'
            }))
            return
          }
        
      res.on('data', chunk => {
        const { name } = JSON.parse(chunk)
        foundUser.name = name
      })


    }

  return  res.end('dinay quy postdan')
  }

  if (req.method == "DELETE") {
    if(url == "deleteUser"){
        const foundUser = data.find(user => user.id == url2)
        
          if(!foundUser){
            res.writeHead(400, {"Content-type":"application/json"})
            res.end(JSON.stringify({
              message:'yogakan'
            }))
            return
          }
    const index = data.findIndex(user => user.id == foundUser.id)

     data.splice(index, 1)
     return   res.end('deleted user')


    }

  return  res.end('dinay quy postdan')
  }

  res.end('dinay quy ')
})


server.listen(9000, () => {
  console.log('server is running on port:9000');
})