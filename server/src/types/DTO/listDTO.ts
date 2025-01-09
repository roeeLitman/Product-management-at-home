import mongoose from "mongoose";
import { ListType } from "../enum/ListType";

export interface ListDTO {
    name : string
    listType : ListType
    group : mongoose.Types.ObjectId
    completed? : boolean
}