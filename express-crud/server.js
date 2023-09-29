const express = require('express')
const fs = require('fs')
const { read , write} = require('./utils/FS')
const path = require('path')

const app = express()

app.use(express.json())


app.get('/users', (_, res) => {
  const allData = read('users.json')
  res.json(allData)
})

app.post('/createuser', (req, res) => {
  const { username , password } = req.body
  const allData = read('users.json')
  allData.push({id:allData[allData.length - 1 ]?.id + 1 || 1 , username, password })

  write('users.json', allData)
  res.send('user successfuly created')
})


app.put('/updateuser/:id' , ( req, res ) => {
  const { id } = req.params
  const { username , password } = req.body
  const allData = read('users.json')
  const upDatedUsers = allData.map(item => item.id == id ? { id,username, password } : item )
  write('users.json', upDatedUsers)

  res.send('user successfuly updated')
})


app.delete('/deleteuser/:id', ( req, res ) => {
  const { id } = req.params
  const allData = read('users.json')
  const deletdUsers = allData.filter(item => item.id != id)
  write('users.json', deletdUsers)
  res.send('user successfuly deleted')

})

app.listen(3000, console.log('server running'))