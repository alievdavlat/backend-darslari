
import { Router } from "express";
import newHospitalBranchMiddleware from "../middlewares/newHospitalBranch.middleware.js";
import newHospitalBranchController from "../controllers/newHospitalBranch..controller.js";



const HospitalsBranchesRouter  = Router()

HospitalsBranchesRouter
      .post('/newhospitalbranch', newHospitalBranchMiddleware, newHospitalBranchController)

export default  HospitalsBranchesRouter

