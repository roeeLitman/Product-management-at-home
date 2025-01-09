import mongoose from "mongoose";
import { ListType } from "../enum/ListType";

export interface ListDTO {
    grupId: mongoose.Types.ObjectId
    name: string
    listType: ListType
}