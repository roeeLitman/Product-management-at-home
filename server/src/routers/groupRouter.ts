import {Router} from "express";
import { createGroup, getGroupById } from "../controllers/groupController";
import { verifyToken } from "../middleware/authMiddleware";
import { get } from "mongoose";

const groupRouter = Router()

// get grop by id
groupRouter.get("/:id", getGroupById)

//create new grop
groupRouter.post("/create" ,createGroup)

//delete grop by id
groupRouter.get("/delete/:id", () => {} )

//add user to grop
groupRouter.get("/addUser/:id", () => {} )

//delete user from grop
groupRouter.get("/deleteUser/:id", () => {} )

export default groupRouter

