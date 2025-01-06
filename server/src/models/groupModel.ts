import { Model, model, Schema, Types } from "mongoose";

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
        default: [],
    },
    shoppingList: {
        type: [{ type: Types.ObjectId, ref: "List" }],
        default: [],
    },
});

const GroupModel: Model<Group> =  model<Group>("Group", groupSchema);

export default GroupModel
