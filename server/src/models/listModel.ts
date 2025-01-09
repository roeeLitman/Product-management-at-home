import { Model, model, Schema, Types } from "mongoose";
import { ListType } from "../types/enum/ListType";

interface List {
    name: string,
    listType: ListType,
    group: Types.ObjectId,
    prodacts: Types.ObjectId[],
    createdAt: Date
    completed?: boolean
}

const listSchema = new Schema<List>({
    name: {
        type: String,
        required: true
    },
    listType: {
        type: String,
        enum: Object.values(ListType),
        required: true
    },
    group: {
        type: Schema.Types.ObjectId ,
        ref: "Group",
    },
    prodacts: {
        type: [{ type: Schema.Types.ObjectId , ref: "Product" }],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    completed: {
        type: Boolean,
        required: false,
        default: null
    }
})

const ListModel: Model<List> = model<List>("List", listSchema);

export default ListModel

