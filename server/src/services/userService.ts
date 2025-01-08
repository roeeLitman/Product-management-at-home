import mongoose ,{ ObjectId, Schema } from "mongoose";
import UsersModel from "../models/userModel";
import AppError from "../types/class/appErore";


export const addGroupByIdService = async (userId: string, groupId: mongoose.Types.ObjectId) => {
    try {
        const user = await UsersModel.findById(userId);
        if(!user) {throw new AppError("User not found", 404)}
        user.groups!.push(groupId);
        await user.save();
        return user.groups;
    } catch (err) {
        throw err;
    }
};

export const addGroupToUserService = async (userId: mongoose.Types.ObjectId, groupId: mongoose.Types.ObjectId) => {
    try {
        const user = await UsersModel.findById(userId);
        if (!user) throw new AppError("User not found", 404);
        user.groups!.push(groupId);
        await user.save();
        return user.groups;
    } catch (err) {
        throw err;
    }
}

export const deleteRefGroupFromUsersService = async (groupIds: mongoose.Types.ObjectId[], groupId: mongoose.Types.ObjectId) => {
    try {
        const updateWriteOpResult = await UsersModel.updateMany({ _id: {$in: groupIds} }, { $pull: { groups: groupId }} );
        return updateWriteOpResult
    } catch (err) {
        throw err
    }
}