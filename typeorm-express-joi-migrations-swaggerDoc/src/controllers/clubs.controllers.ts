import { NextFunction, Request, Response } from "express";
import { Clubs } from "../entities/clubs.entity";
import { ErrorHandler } from "../utils/errorHandler";
import { typeOrm } from "../config/typeorm.config";
import { ClubsValidation } from "../validations/clubs.validation";


export default {

  GET: async (req: Request, res:Response , next:NextFunction) => {
    const allClubs = await typeOrm
    .getRepository(Clubs)
    .find({
      relations :{
        players: true
      }
    })
    .catch(err => next(new ErrorHandler(err.message, 503)));


    if(allClubs) res.status(201).json(allClubs)
  },

  POST: async (req: Request, res:Response , next:NextFunction) => {
    const { error , value } = ClubsValidation.validate(req.body)

    if(error) next( new ErrorHandler(error.message, 400))


      const { name } = value

      const newclub = await typeOrm
        .createQueryBuilder().insert().into(Clubs).values({
          name
        }).returning(['id', 'name']).execute().catch(err => next( new ErrorHandler(err.message  , 503)))


        if(newclub) res.status(201).json(newclub)
  }
}