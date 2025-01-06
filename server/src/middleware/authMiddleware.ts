import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import AppError from "../types/class/appErore"

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')
    if (!token) throw new AppError("token is missing", 401)
    try {
        const decoded =  jwt.verify(token, process.env.JWT_SECRET as string) as {[key: string]: any}
        req.user = decoded        
        next();
    } catch (err) {
        next(err);
    }
}