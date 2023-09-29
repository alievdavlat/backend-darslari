import { NextFunction, Request, Response } from "express";
import { usersModel } from "../model/index";
import { ErrorHandler } from "../errors/errors";
import {
  paramsFilter,
  paramsFilterUUID,
  userPostFilter,
  usersPutFilter,
} from "../validation/usersValidations/users.validation";


export default {
  GET: async ( req: Request, res: Response, next: NextFunction ): Promise<any> => {
    const allusers = await usersModel
      .find()
      .catch((err) => next(new ErrorHandler("users not found", 404)));

    if (allusers) res.status(200).json(allusers);
  },

  POST: async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = userPostFilter.validate(req.body);

    if (error) next(new ErrorHandler("values is required", 400));

    const { name, password, status } = value;

    const allusers = await usersModel
      .create({ name, password, status })
      .catch((err) => next(new ErrorHandler("users not found", 404)));

    if (allusers) res.status(201).json(allusers);
  },

  PUT: async (req: Request, res: Response, next: NextFunction) => {

    const { id } = req.params;
    

    const { error, value } = usersPutFilter.validate(req.body);

    if (error) next(new ErrorHandler("values required", 400));

    const { name, password, status } = value;



    const query = { _id : id };
    const data = { name, password, status };


    const updatedUsers = await usersModel
      .findOneAndUpdate(query, data)
      .catch((err) => next(new ErrorHandler(err.message , 503)));


      if(updatedUsers) res.status(200).json(updatedUsers)
  },

  DELETE: async ( req:Request, res:Response, next:NextFunction) => {
    const { id } = req.params


    const checkUser = await usersModel.findById({_id: id})


    if(!checkUser) next(new ErrorHandler('user not found', 404))


    const deletedUser = await usersModel.findByIdAndDelete({_id: id})

    res.status(200).json(deletedUser)
  }
  

};
