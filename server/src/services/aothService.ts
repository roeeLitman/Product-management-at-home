import UsersModel from "../models/userModel"
import AppError from "../types/class/appErore"
import { RegisterDTO } from "../types/DTO/registerDTO"
import { ResData } from "../types/interface/resData"

export const createUserService = async (body: RegisterDTO ):Promise <ResData> => {
    try {
        const uesr = new UsersModel(body)
        await uesr.save()
        return {
            statusCode: 200,
            message: "User created successfully",
            data: {
                _id: uesr._id,
                name: uesr.name,
                lastName: uesr.lastName,
            }
        }
    } catch (err: any) {
        throw new AppError(err.message, 400)
    }
}