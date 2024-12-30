import { Types } from "mongoose";

interface List {
    name: string,
    listType: string,
    group: Types.ObjectId,
    prodacts: Types.ObjectId[],
}
