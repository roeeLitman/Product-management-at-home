import {Router} from "express";
import { addUserToGroup, createGroup, deleteGroup, deleteUserFromGroup, getGroupById } from "../controllers/groupController";


const groupRouter = Router()

// get grop by id
groupRouter.get("/:id", getGroupById)

//create new grop
groupRouter.post("/create" ,createGroup)

//delete grop by id
groupRouter.delete("/delete/:id", deleteGroup )

//add user to grop
groupRouter.post("/adduser", addUserToGroup )

//delete user from grop
groupRouter.post("/deleteuser", deleteUserFromGroup )

export default groupRouter

