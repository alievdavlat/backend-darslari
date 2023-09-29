module.exports  = (req, res ,next) => {
  const { token } = req.query
  req.fromMiddleWare = 'mandan , sanga otdi'
  if(token != 'qwerty'){
   res.sendStatus(401);
  }

 next()
}



// app.get('/*', (req, res, next) => {
//   const { token } = req.query
//     if(token != 'qwerty'){
//      res.sendStatus(401);
//     }
  
//    next()
// })