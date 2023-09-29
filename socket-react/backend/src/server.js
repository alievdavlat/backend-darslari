import express from 'express'
import { Server } from 'socket.io'
import fs from 'fs'
import path from 'path'


const app = express()


const httpServer = app.listen(8080, console.log(`server running on port : 8080`) )


const io = new Server(httpServer)

io.on('connection', socket => {
    socket.on('new-user', name => {
     
      const allUsers = JSON.parse(fs.readFileSync(path.join(process.cwd(),'src', 'model', 'users.json')))


      allUsers.push( {
        id: allUsers.at(-1)?.id + 1 || 1,
        name
      })

      fs.writeFileSync(path.join(process.cwd(), 'src','model', 'users.json'), JSON.stringify(allUsers, null, 4))

      socket.broadcast.emit('all-users', allUsers)
      socket.broadcast.emit('user-joined', name)
    })
})