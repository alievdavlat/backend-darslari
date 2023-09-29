
import { Router } from "express";
import playersControllers from "../../controllers/players.controllers";
import clubsControllers from "../../controllers/clubs.controllers";


const ClubsRouters  = Router()

    ClubsRouters
        .get('/clubs', clubsControllers.GET)
        .post('/clubs', clubsControllers.POST)




        
export default ClubsRouters