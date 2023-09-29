
import path from 'path'


const downloadImgController = ( req , res ) => {

try {
const { file } = req.params 
return res.download(path.join(process.cwd(), 'src', 'static', file));

} catch (error) {
  res.sendStatus(401);  
}

}


export default downloadImgController

