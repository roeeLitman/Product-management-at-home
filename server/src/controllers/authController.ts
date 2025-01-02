import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";
import { ResData } from "../types/interface/resData";

export const createUser = (req: Request, res: Response,  next: NextFunction): void => {
    try {
        const user: ResData  = createUserService(req.body)
        res.status(user.statusCode).json(user.data)
    } catch (err) {
        next()
    }
    
}