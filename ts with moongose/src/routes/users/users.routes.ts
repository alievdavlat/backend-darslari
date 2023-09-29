import { Router  } from "express";
import usersControlleers from "../../controllers/users.controlleers";


const usersRouter = Router()


usersRouter
        .get('/users', usersControlleers.GET)
        .post('/users', usersControlleers.POST)
        .put('/users/:id', usersControlleers.PUT)
        .delete('/users/:id', usersControlleers.DELETE)




        
export default usersRouter