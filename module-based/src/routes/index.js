

import { Router } from "express";
import { deleteData, getData, getDataById, postData, putData } from "../modules/restaraunts/restaraunts.module.js";
import { Login } from "../modules/users/users.module.js";

const router = Router()

router
.get('/restaraunts', getData)
.get('/restaraunts/:id', getDataById)
.post('/addrestaraunt', postData)
.put('/updaterestaraunt/:id', putData)
.delete('/deleterestaraunt/:id', deleteData)
.post('/login', Login)

export default router