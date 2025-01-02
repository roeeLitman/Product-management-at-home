import mongoose from "mongoose"

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(process.env.MONGO_URL as string)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log(err)
    }
}