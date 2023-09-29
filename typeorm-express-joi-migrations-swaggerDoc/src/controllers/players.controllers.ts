import { NextFunction, Request, Response } from "express";
import { typeOrm } from "../config/typeorm.config";
import { Players } from "../entities/player.entity";
import { ErrorHandler } from "../utils/errorHandler";
import { PlayersValidation, PlayersValidationPUT, PlayersValidationPUTid } from "../validations/players.validaion";
import { Clubs } from "../entities/clubs.entity";



export default {
  GET: async (_: Request, res: Response, next: NextFunction) => {
    const allPlayers = await typeOrm
      .getRepository(Players)
      .find({
        relations: {
          club: true
        }
      })
      .catch(err => next(new ErrorHandler(err.message, 503)));


      if(allPlayers) res.status(201).json(allPlayers)
  },

  POST:  async(req: Request, res: Response, next: NextFunction) => {

    const { error , value } = PlayersValidation.validate(req.body)

    if(error) next( new ErrorHandler(error.message, 400))


      const { name , club } = value

      const newPlayer = new Players()

      newPlayer.name = name
      const foundedclub =  await typeOrm.getRepository(Clubs).find({ where : { id : club } })

      newPlayer.club = foundedclub
       
    const playerCreated =   await typeOrm.manager.save(newPlayer).catch(err => next(new ErrorHandler(err.message, 503)))


      if (playerCreated) res.status(201).json(playerCreated)
  },

  UPDATE:async (req: Request, res: Response, next: NextFunction) => {

    const { error , value } = PlayersValidationPUTid.validate(req.params)
    
    if(error) next( new ErrorHandler(error.message, 400))
    


    const { error: playerError , value: playerValue} = PlayersValidationPUT.validate(req.body)

    if(playerError) next( new ErrorHandler(playerError.message, 400))



    const checkUser  = await typeOrm.getRepository(Players).findOne({where:{ id : value}})

    if(!checkUser) next( new ErrorHandler('user not found', 404))



    const { id } = value

    const updatedPlayer  = await  typeOrm.createQueryBuilder()
    .update(Players)
    .set({name: playerValue.name , club: playerValue.club || checkUser.club })
    .where("id = :id", { id })
    .execute()


   if(updatedPlayer)  res.status(200).json(updatedPlayer)


  },

  DELETE:async (req:Request, res:Response, next:NextFunction) => {

    const { error , value } = PlayersValidationPUTid.validate(req.params)


    if(error) next( new ErrorHandler(error.message, 400))



    const checkUser  = await typeOrm.getRepository(Players).findOne({where:{ id : value}})

    if(!checkUser) next( new ErrorHandler('user not found', 404))

    


    const { id } = value

    console.log(id);
    
    const deletedPlayer  = await typeOrm.createQueryBuilder()
    .delete()
    .from(Players)
    .where('id = :id',  { id })
    .execute()


    if(deletedPlayer) res.status(200).json(deletedPlayer)
  }





};
 