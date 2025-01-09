import ListModel from "../models/listModel";
import { ListDTO } from "../types/DTO/listDTO";
import { ListType } from "../types/enum/ListType";
import { ResData } from "../types/interface/resData";
import { addListToGroupService } from "./groupService";

// ceate new list
export const createNewListService = async (data: ListDTO): Promise<ResData> => {
    try {
        const newList = new ListModel({
            ...data,
            completed: data.listType === ListType.ShoppingList ? false : null
        });
        await addListToGroupService(data.group, newList._id, data.listType);
        await newList.save();
        return {
            statusCode: 200,
            message: "List created successfully",
            data: {
                newList
            }
        };
    } catch (err) {
        throw err;
    }
}