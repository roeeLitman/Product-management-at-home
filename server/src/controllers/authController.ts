import { NextFunction, Request, Response } from "express";
import { User } from "../models/userModel";
import { ResData } from "../types/interface/resData";
import { UserDTO } from "../types/DTO/userDTO";
import { createUserService, loginService } from "../services/aothService";

// register
export const createUser = async (
    req: Request<any, any, any, UserDTO>,
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

// login
export const login = async (
    req: Request<any, any, any, UserDTO>,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const userWuthToken: ResData = await loginService(req.body);
        res.status(userWuthToken.statusCode).json(userWuthToken.data);
    } catch (err) {
        next(err);
    }
};
