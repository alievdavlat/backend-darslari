

import { QueryTypes } from 'sequelize'
import sequelize from '../config/sequalize.config.js'
import { Hospitals, Hospital_branches } from '../model/index.js'



const getHospitals = async( req , res ) => {
  try {
      const  allHospitals = await Hospitals.findAll({
        include: Hospital_branches
      })

      res.send(allHospitals)

  } catch (err) {
    res.send({
      status: err.code,
      data: null,
      msg:err
    })
  }
}

export default  getHospitals