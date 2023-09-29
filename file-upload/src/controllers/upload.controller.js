const path = require('path')
const fs = require('fs')
module.exports = {
  // UPLOAD: ( req , res ) => {
  //   try {
  //     // req.files.image.mv( path.join(__dirname, '..', 'assets', 'uploades', req.files.image.name), err => {
  //     //   if(err) throw err
  //     //   res.send('ok')  
  //     //  })

  //   } catch (error) {
  //       console.log(error);
  //       res.sendStatus(500);
  //   }
  // },
  GET : ( req , res ) => {
    res.download(path.join(__dirname, '..', 'assets', 'uploades', '1.jpg'))
  },
  UPLOAD_MULTER : ( req , res ) => {
    try {
      const { name , password } = req.body
      const allData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'model', 'users.json')))

      allData.push({
         id : allData.at(-1)?.id + 1 || 1 ,
          name ,
          password ,
          image : 'http://localhost:8000/assets/uploades/' + req.file.filename
        })

      fs.writeFileSync(path.join(process.cwd(), 'src', 'model', 'users.json'), JSON.stringify(allData, null, 4))
      res.redirect('/users')
    } catch (error) {
      console.log(error.message);
      res.sendStatus(500)
    }
  }
}