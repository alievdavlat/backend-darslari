import express from 'express'
import userControllers from '../controllers/users.controllers'


const Userrouter = express.Router();


Userrouter
    .post('/users', userControllers.post)
    .get('/users', userControllers.get)
    .put('/users/:id', userControllers.put)
    .delete('/users/:id', userControllers.delete)

export default Userrouter;

