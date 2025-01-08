import mongoose from "mongoose";

export interface AddUserDTO {
    groupId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
    addingId: string;
}