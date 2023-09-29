import fs from 'fs'
import path from 'path'

export const getServerSideRendering = ( req , res ) => {
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', 'model', 'users.model.json')))
  
  res.render('users.view.ejs', {data})
}







