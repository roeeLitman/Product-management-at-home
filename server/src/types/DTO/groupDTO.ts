import mongoose from "mongoose";

export interface GroupDTO {
    groupId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
}
