

const  errorHandle = (err, _ , res, __) => {


  res.status(err.status).json(err.getErrorInfo(err.message, err.status));
  
}


export default  errorHandle