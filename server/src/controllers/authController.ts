import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";
import { ResData } from "../types/interface/resData";
import { RegisterDTO } from "../types/DTO/registerDTO";
import { createUserService } from "../services/aothService";

export const createUser = async (
    req: Request<any, any, any, RegisterDTO>,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const user: ResData = await createUserService(req.body);
        res.status(user.statusCode).json(user.data);
    } catch (err) {
        next(err);
    }
};
