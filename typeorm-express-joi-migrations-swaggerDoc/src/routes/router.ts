
import { Router  } from "express";
import PlayerRouters from "./players/players.routes";
import ClubsRouters from "./clubs/clubs.routes";


const mainRouter = Router()




export default  mainRouter.use([
  PlayerRouters,
  ClubsRouters
])


