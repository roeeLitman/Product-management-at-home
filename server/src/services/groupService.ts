import e from "express";
import GroupModel from "../models/groupModel";
import AppError from "../types/class/appErore";
import { ResData } from "../types/interface/resData";
import {
    addGroupByIdService,
    addGroupToUserService,
    deleteRefGroupFromUsersService,
} from "./userService";
import mongoose from "mongoose";
import { GroupDTO } from "../types/DTO/groupDTO";
import { ListType } from "../types/enum/ListType";

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
export const addUserFromGroupService = async (
    data: GroupDTO
): Promise<ResData> => {
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

// delte grupoe by id
export const deleteGroupByIdService = async (
    id: mongoose.Types.ObjectId
): Promise<ResData> => {
    try {
        const group = await GroupModel.findById(id);
        if (!group) throw new AppError("not find grupe", 401);

        //delet ref from users
        const updateWriteOpResult = await deleteRefGroupFromUsersService(
            group.users,
            id
        );

        //delet group
        const updateWriteOpResult2 = await GroupModel.findByIdAndDelete(id);

        return {
            statusCode: 200,
            message: "deleted group",
            data: {
                updateWriteOpResult,
                groupId: updateWriteOpResult2?._id,
            },
        };
    } catch (err) {
        throw err;
    }
};

// delete user from group
export const deleteUserFromGroupService = async ({
    groupId,
    userId,
}: GroupDTO): Promise<ResData> => {
    try {
        if (!groupId || !userId)
            throw new AppError("something is missing", 400);
        const groupFromDb = await GroupModel.findById(groupId);
        if (!groupFromDb) throw new AppError("not find grupe", 401);
        await deleteRefGroupFromUsersService([userId], groupId);
        const updateGroup = await GroupModel.findByIdAndUpdate(
            { _id: groupId },
            { $pull: { users: userId } },
            { new: true }
        ).lean();
        return {
            statusCode: 200,
            message: "deleted user from group",
            data: updateGroup?.users,
        };
    } catch (err) {
        throw err;
    }
};

// add list to group
export const addListToGroupService = async (
    groupId: mongoose.Types.ObjectId,
    listId: mongoose.Types.ObjectId,
    listType: ListType
) => {
    try {
        const group = await GroupModel.findById(groupId);
        if (!group) throw new AppError("not find grupe", 401);
        listType === ListType.Watchlist
            ? group.watchlist.push(listId)
            : group.shoppingList.push(listId);
        await group.save();

        return listType === ListType.Watchlist
            ? group.watchlist
            : group.shoppingList
    } catch (err) {
        throw err;
    }
};
