const http = require('http')
const { EventEmitter } = require('events')

const user = new EventEmitter()

user.on('new-user', () => console.log('user'))
user.emit('new-user')


// eventmiter bu custom eventla yasawshga kere masaaln cat app la socketlada 
