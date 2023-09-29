
import { Router } from "express";
import playersControllers from "../../controllers/players.controllers";


const PlayerRouters  = Router()

    PlayerRouters
        .get('/players', playersControllers.GET)
        .post('/players', playersControllers.POST)
        .put('/players/:id', playersControllers.UPDATE)
        .delete('/players/:id' , playersControllers.DELETE)


        
export default PlayerRouters