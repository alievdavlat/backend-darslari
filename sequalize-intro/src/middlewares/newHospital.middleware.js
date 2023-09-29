

 const newHospitalMiddleware = (req , res , next) => {
  try {
    const { name , address } = req.body;



    if (!name) {
      res.send({
        status: 400,
        data:'bir balo',
        msg:'values required'
      })
      return
    }


    const data = address ?  { name,address} : {name}
    req.data = data
    next()

  } catch (err) {
    res.send({
      status: err.status,
      data:null,
      msg: err.msg
    })
    return
  }
}

export default  newHospitalMiddleware