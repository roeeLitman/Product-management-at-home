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