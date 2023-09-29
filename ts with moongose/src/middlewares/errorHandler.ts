import { NextFunction, Request, Response } from "express"
import { ErrorHandler } from "../errors/errors"

export const errohandle = (err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
    return res.status(err.status).json(err.getErrorInfo())
}