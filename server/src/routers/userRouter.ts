import { Router } from "express";

const userRouter = Router()

// get all user 
userRouter.get("/", () => {} )

// get user by id
userRouter.get("/:id", () => {} )

export default userRouter