import { application } from "express";
import UsersModel from "../models/userModel";
import AppError from "../types/class/appErore";
import { UserDTO } from "../types/DTO/userDTO";
import { ResData } from "../types/interface/resData";
import bcrypt from "bcrypt";
import { isMatch } from "../utils/validatetion";

export const createUserService = async (body: UserDTO): Promise<ResData> => {
    try {
        body.password = await bcrypt.hash(body.password, 10);
        const uesr = new UsersModel(body);
        await uesr.save();
        return {
            statusCode: 200,
            message: "User created successfully",
            data: {
                _id: uesr._id,
                name: uesr.name,
                lastName: uesr.lastName,
            },
        };
    } catch (err: any) {
        throw new AppError(err.message, 400);
    }
};

export const loginService = async (body: UserDTO): Promise<ResData> => {
    try {
        // get user by name
        const userFRomDb = await UsersModel.findOne({ name: body.name });
        if (!userFRomDb) {
            throw new AppError("User not found", 404);
        }
        // compare password
        await isMatch(body.password, userFRomDb.password);
        // return user
        return {
            statusCode: 200,
            message: "User logged in successfully",
            data: {
                _id: userFRomDb._id,
                name: userFRomDb.name,
                lastName: userFRomDb.lastName,
            },
        };
    } catch (err: any) {
        throw err;
    }
};
