
const fs = require('fs')
const path = require('path')

module.exports = {
  GET: ( req , res ) => {
      try {
          const allData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src',  'model', 'data.json')))
           
          res.render('index.ejs', { allData })

      } catch (error) {
        console.log(error.message);
        res.res.sendStatus(500);
      }
  },
  POST:( req ,res ) => {
    try {
      const { name , email , message } = req.body
      console.log(name, email, message);
      const allData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src',  'model', 'messages.json')))
      allData.push({ id: allData.at(-1)?.id + 1 || 1 , name, email, message})
      fs.writeFileSync(path.join(process.cwd(), 'src',  'model', 'messages.json'), JSON.stringify(allData, null, 4))
      res.redirect('/')
    } catch (error) {
      res.sendStatus(500)
    }
  },

  GET_MESSAGES : ( _, res ) => {
    try {
        res.json( 

          JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src',  'model', 'messages.json')))
        )
    } catch (error) {
      console.log(error);
      res.sendStatus(500)
    }
  },
  GET_USERS : ( _, res ) => {
 const allUsers =  JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src',  'model', 'users.json')))
    res.render('users.ejs', { users : allUsers})
  }
}