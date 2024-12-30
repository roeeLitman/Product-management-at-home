import { Model, model, Schema, Types } from "mongoose";
import { User } from "./userModel";

interface Group {
    name: string;
    users: Types.ObjectId[];
    watchlist: Types.ObjectId[];
    shoppingList: Types.ObjectId[];
}

const groupSchema = new Schema<Group>({
    name: {
        type: String,
        required: true,
    },
    users: {
        type: [{ type: Types.ObjectId, ref: "User", required: true }],
    },
    watchlist: {
        type: [{ type: Types.ObjectId, ref: "List" }],
    },
    shoppingList: {
        type: [{ type: Types.ObjectId, ref: "List" }],
    },
});

const GroupModel: Model<Group> =  model<Group>("Group", groupSchema);

export default GroupModel
