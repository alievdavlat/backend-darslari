import { Hospitals } from '../model/index.js'

export const newHospitalController = async (req , res ) => {
  try {
    const { data } = req

    const newHospital = await Hospitals.create(data, {
      returning: true,
    })


    res.send({
      status:200,
      data:newHospital,
      msg :"ok"
    })

  } catch (err) {
    res.send({
      status: err.status,
      data:null,
      msg: err.msg
    })
  
  }
}

export default newHospitalController