const express = require('express');
const app = express();

const { users, projects } = require('./data')
const acces = require('./middlewares/acces.middleware')
const verifyAccess = require('./middlewares/verifyAcces.middleware')


// const regex = new RegExp('')
 

app.use(express.json())


app.post('/login',acces, ( req, res ) => {
  res.send(req.token)
})  



// app.use(verifyAccess)


app.route('/users')
  .get((_, res) => {
  res.send(users.filter(item => item.role == 'user'));
})
 .post( (_, res) => {
  res.send('post');
})
.put( (req, res ) => {
  res.send("put")
})



app.get('/projects', ( req , res ) => {
const { userId } = req

res.json(projects.filter(e => e.userId == userId))
})






app.use('/*', ( _, res ) => res.sendStatus(404))

app.listen(4000, () => {
  console.log('server running on port 4000!');
});

