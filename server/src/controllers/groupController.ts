import { NextFunction, Request, Response } from "express";
import { ResData } from "../types/interface/resData";
import { createNewGroupService, getGroupByIdService } from "../services/groupService";

// create newGroup
export const createGroup = async (req: Request, res: Response , next: NextFunction) => {
    try {        
        const resWithId: ResData = await createNewGroupService(req.body.name, req.user!._id);
        res.status(resWithId.statusCode).json(resWithId.data);
    } catch (err) {
        next(err);
    }
}

//get group by id
export const getGroupById = async (req: Request<any, any, any, { id: string }>, res: Response , next: NextFunction) => {
    try {
        const resWithGrupe: ResData = await getGroupByIdService(req.params.id);
        res.status(resWithGrupe.statusCode).json(resWithGrupe.data);
    } catch (err) {
        next(err);
    }
}