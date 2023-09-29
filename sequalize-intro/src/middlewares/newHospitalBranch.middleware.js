

const newHospitalBranchMiddleware = (req , res , next) => {
  try {
    const { name, HospitalId  } = req.body;


    if (!name || !HospitalId) {
      res.send({
        status: 400,
        data:'bir balo',
        msg:'values required'
      })
      return
    }


    const data =  {name, HospitalId}
    req.data = data
    next()

  } catch (err) {
    console.log(err);
    res.send({
      status: err.status,
      data:null,
      msg: err.msg
    })
    return
  }
}

export default  newHospitalBranchMiddleware