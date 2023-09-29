import { Router } from "express";
import newHospitalMiddleware from "../middlewares/newHospital.middleware.js";
import newHospitalController from "../controllers/newHospital.controller.js";
import updateHospitalMiddleware from "../middlewares/updateHospital.middleware.js";
import updateHospitalController from "../controllers/updateHospital.controller.js";
import getHospitals from "../controllers/getHospitals.controller.js";


const HospitalsRouter  = Router()

HospitalsRouter
      .post('/newhospital', newHospitalMiddleware, newHospitalController)
      .put('/updatehospital/:id', updateHospitalMiddleware, updateHospitalController)
      .get('/hospitals', getHospitals)

      
export default  HospitalsRouter