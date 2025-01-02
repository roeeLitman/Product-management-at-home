import AppError from "../types/class/appErore";
import bcrypt from "bcrypt";

export async function isMatch(
    password: string,
    hashPassword: string
): Promise<boolean | void> {
    try {
        // compare password
        const isPasswordMatch = await bcrypt.compare(password, hashPassword);
        // check if password is correct or not
        if(!isPasswordMatch) throw new AppError("password or name is incorrect", 401)
        return isPasswordMatch;
    } catch (err: any) {
        throw err;
    }
}
