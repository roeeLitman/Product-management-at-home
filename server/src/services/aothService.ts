import { application } from "express";
import UsersModel from "../models/userModel";
import AppError from "../types/class/appErore";
import { UserDTO } from "../types/DTO/userDTO";
import { ResData } from "../types/interface/resData";
import bcrypt from "bcrypt";
import { createToken, isMatch } from "../utils/validatetion";
import jwt from "jsonwebtoken";

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

export const loginService = async ({name, password}: UserDTO): Promise<ResData> => {
    try {
        if(! name || !password) throw new AppError("something is missing", 400); 
        
        // get user by name
        const userFRomDb = await UsersModel.findOne({ name: name }).lean();
        if (!userFRomDb) {
            throw new AppError("User not found", 404);
        }
        // compare password
        await isMatch(password, userFRomDb.password);

        //create payload
        const payload = { ...userFRomDb, password: undefined };

        // create token
        const token = createToken(payload);

        // return user
        return {
            statusCode: 200,
            message: "User logged in successfully",
            data: {
                ...payload,
                token,
            },
        };
    } catch (err: any) {
        throw err;
    }
};
