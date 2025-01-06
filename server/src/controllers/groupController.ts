import { NextFunction, Request, Response } from "express";
import { ResData } from "../types/interface/resData";
import { createNewGroupService } from "../services/groupService";

// create newGroup
export const createGroup = async (req: Request, res: Response , next: NextFunction) => {
    const resWithId: ResData = await createNewGroupService(req.body.name, req.body.userId);
}