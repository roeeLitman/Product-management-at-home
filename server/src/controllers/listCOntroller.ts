import { NextFunction, Request, Response } from "express";
import { ResData } from "../types/interface/resData";
import { createNewListService } from "../services/listService";
import { ListDTO } from "../types/DTO/listDTO";

export const createNewList = async (req: Request<any, any, ListDTO>, res: Response, next: NextFunction) => {
    try {
        const resWithLIst: ResData = await createNewListService(req.body);
        res.status(resWithLIst.statusCode).json(resWithLIst.data);
    } catch (err) {
        next(err);
    }
}