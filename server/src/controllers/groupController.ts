import { NextFunction, Request, Response } from "express";
import { ResData } from "../types/interface/resData";
import {
    addUserFromGroupService,
    createNewGroupService,
    deleteGroupByIdService,
    getGroupByIdService,
} from "../services/groupService";
import { AddUserDTO } from "../types/DTO/addUserDTO";
import mongoose from "mongoose";

// create newGroup
export const createGroup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const resWithId: ResData = await createNewGroupService(
            req.body.name,
            req.user!._id
        );
        res.status(resWithId.statusCode).json(resWithId.data);
    } catch (err) {
        next(err);
    }
};

//get group by id
export const getGroupById = async (
    req: Request<any, any, any, { id: string }>,
    res: Response,
    next: NextFunction
) => {
    try {
        const resWithGrupe: ResData = await getGroupByIdService(req.params.id);
        res.status(resWithGrupe.statusCode).json(resWithGrupe.data);
    } catch (err) {
        next(err);
    }
};

// add user to groupt
export const addUserToGroup = async (
    req: Request<any, any, AddUserDTO>,
    res: Response,
    next: NextFunction
) => {
    try {
        const resWithGrupe: ResData = await addUserFromGroupService(req.body);
        res.status(resWithGrupe.statusCode).json(resWithGrupe.data);
    } catch (err) {
        next(err);
    }
};

// delete group
export const deleteGroup = async (req: Request<any, any, any, { id: mongoose.Types.ObjectId }>, res: Response, next: NextFunction) => {
    try {
        const resObj: ResData = await deleteGroupByIdService(req.params.id);
        res.status(resObj.statusCode).json(resObj.data);
    } catch (err) {
        next(err);
    }
};
