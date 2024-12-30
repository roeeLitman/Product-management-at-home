import { Model, model, Schema, Types } from "mongoose"

export interface User {
    name: string,
    lastName: string,
    password: string,
    groups: string[]
}

const userSchma = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    groups: {
        type: [{type: Types.ObjectId, ref: "Group"}],
    }
})

const UsersModel: Model<User> = model<User>("User", userSchma)

export default UsersModel