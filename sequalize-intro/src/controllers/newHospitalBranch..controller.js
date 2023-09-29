import { Hospital_branches } from "../model/index.js";


const newHospitalBranchController = async(req , res ) => {
  try {
    const {data } = req;


   const newBranch = await Hospital_branches.create(data, {
    returning: true
   })


    res.send({
      status:201,
      data: newBranch,
      msg:'ok'
    })

  } catch (err) {
    res.send({
      status: err.status,
      data:null,
      msg: err.msg
    })
    return
  }
}

export default  newHospitalBranchController