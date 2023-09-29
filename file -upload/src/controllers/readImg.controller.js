import path from 'path'


const readImgController = ( req , res ) => {

try {
const { file } = req.params 
return res.sendFile(path.join(process.cwd(), 'src', 'static', file));

} catch (error) {
  res.sendStatus(401);  
}

}

export default readImgController

