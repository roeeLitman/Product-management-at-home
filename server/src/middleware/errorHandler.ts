import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import AppError from "../types/class/appErore";

// Middleware של טיפול בשגיאות
const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.error(err); 

    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            error: err.message,
            details: 'This is a custom error'
        });
        return
    }

    if (err instanceof TypeError) {
        res.status(400).json({
            error: 'Type Error: Bad request'
        });
        return
    }

    res.status(500).json({
        error: 'Internal Server Error',
        details: 'Something went wrong on the server'
    });
};

export default errorHandler;