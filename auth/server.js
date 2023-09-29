
require('dotenv').config()
const http = require('http')
const { read, write } = require('./utils/FS')
const jwt = require('jsonwebtoken')



console.log(process.env.SECRET_KEY);
console.log(process.argv); //bu terminalda yozlgan codelani arrayga solb oberadi
const server = http.createServer((req,res) => {

  const options = {
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin":"*"
  }
  const url = req.url.split('/')[1]

  if(req.method == "GET"){
   if(url == "posts"){
    const { token } = req.headers

    const { id } = jwt.verify(token, "VAWE_SECRET_KEY")
    const currentUser = read('users.json').find(item => item.id === id)

    if(!currentUser){
      return res.end('user not found')
    }

    return res.end(JSON.stringify(currentUser))
   }
   const allUsers = read('users.json')
   res.end(JSON.stringify(allUsers))
  return
  }

  if(req.method == "POST"){
      if (url == "register") {
        
    req.on('data', chunk => {
      const { username, password } = JSON.parse(chunk)
      const allUsers = read('users.json')

      const findUser = allUsers.find(item => item.username === username && item.password === password)
      if (findUser) {
        return res.end('this is user already registered')
      }

      allUsers.push({
        id:allUsers[allUsers.length - 1]?.id + 1 || 1,
        username,
        password
      })

      write('users.json', allUsers)

      res.writeHead(201, options)
      return res.end(JSON.stringify({
        message:"user successfuly registered",
        token: jwt.sign({
          id:allUsers[allUsers.length - 1]?.id           
        }, "VAWE_SECRET_KEY")
      }))
      
    })

    return
  }
  }

  if (req.method = 'PUT') {
      if(url == 'updateusers'){

    req.on('data', chunk => {
      const { username , password, id} = JSON.parse(chunk)

      const allUsers = read('users.json')

      const upDated = allUsers.map(item => item.id === id ? {id, username, password} : item )

      write('users.json', upDated)

      res.writeHead(201, options)
      return res.end('user updated')
    })

    return
    }
  }

  if (req.method = 'DELETE') {
    if(url == 'deleteuser'){

      req.on('data', chunk => {
        const { id } = JSON.parse(chunk)
    
        const allUsers = read('users.json')
    
        const deleted = allUsers.filter(item => item.id !== id )
        write('users.json', deleted)
    
        return res.end('user deleted')
      })
    
      return
      }
    
  }

  res.end('bu backend')

})

server.listen(3000, () => {
  console.log('server is already running at 3000');
})