import { NextFunction, Request, Response } from "express";
import { ResData } from "../types/interface/resData";
import { createNewGroupService } from "../services/groupService";

// create newGroup
export const createGroup = async (req: Request, res: Response , next: NextFunction) => {
    try {        
        const resWithId: ResData = await createNewGroupService(req.body.name, req.body.userId);
        res.status(resWithId.statusCode).json(resWithId.data);
    } catch (err) {
        next(err);
    }
}