import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import auothRouter from "./routers/authRouter";
import groupRouter from "./routers/groupRouter";
import listRouter from "./routers/listRouter";
import userRouter from "./routers/userRouter";
import errorHandler from "./middleware/errorHandler";
import { connectDB } from "./config/db";

const app = express();
connectDB()

app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;

app.use("/api/auth",auothRouter)
app.use("/api/group", groupRouter)
app.use("/api/list", listRouter)
app.use("/api/uesr", userRouter)
 
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

