import e from "express";
import GroupModel from "../models/groupModel";
import AppError from "../types/class/appErore";
import { ResData } from "../types/interface/resData";
import { addGroupByIdService, addGroupToUserService } from "./userService";
import mongoose from "mongoose";
import { AddUserDTO } from "../types/DTO/addUserDTO";

export const createNewGroupService = async (
    name: string,
    userId: string
): Promise<ResData> => {
    try {
        const newGroup = new GroupModel({ name, users: [userId] });
        const groupsFromUser = await addGroupByIdService(userId, newGroup._id);
        await newGroup.save();
        return {
            statusCode: 200,
            message: "Group created successfully",
            data: {
                _id: newGroup._id,
                name: newGroup.name,
                userGroups: groupsFromUser,
            },
        };
    } catch (err) {
        throw err;
    }
};

export const getGroupByIdService = async (id: string): Promise<ResData> => {
    try {
        const groupsFromDb = await GroupModel.findById(id).lean();
        if (!groupsFromDb) throw new AppError("not find grupe", 401);
        return {
            statusCode: 200,
            message: "found group",
            data: groupsFromDb,
        };
    } catch (err) {
        throw err;
    }
};
export const addUserFromGroupService = async (data: AddUserDTO): Promise<ResData> => {

    try {
        const group = await GroupModel.findById(data.groupId);

        // if not find grupe
        if (!group) throw new AppError("not find grupe", 401);

        // add user to group and group to user
        await addGroupToUserService(data.userId, data.groupId);
        group.users.push(data.userId);
        await group.save();
        return {
            statusCode: 200,
            message: "deleted user from group",
            data: group,
        };
    } catch (err) {
        throw err;
    }
};
