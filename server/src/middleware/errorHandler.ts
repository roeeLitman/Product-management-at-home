import { NextFunction, Request, Response } from "express";
import AppError from "../types/class/appErore";

export const handelrError = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    } else {
        return res.status(500).json({ message: err.message });
    }
}