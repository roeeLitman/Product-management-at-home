import mongoose from "mongoose";

export interface Group {
    groupId: mongoose.Types.ObjectId;
    userId: mongoose.Types.ObjectId;
}
