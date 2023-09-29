import { Hospitals } from '../model/index.js'

const updateHospitalController = async( req , res  ) => {
  try {

    const { data , id} = req;

    console.log(data);

    const updatedHospital = await Hospitals.update(data, { 
      returning: true,
      where: {
        id
      }
    })

    console.log(updatedHospital);

    res.send({
      status:200,
      data: updatedHospital,
      msg:"ok"
    })


  } catch (err) {
    res.send([
    new Error(err)
    ])
  }
}

export default  updateHospitalController