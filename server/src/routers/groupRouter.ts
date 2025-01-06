import {Router} from "express";
import { createGroup } from "../controllers/groupController";

const groupRouter = Router()

// get grop by id
groupRouter.get("/:id", () => {} )

//create new grop
groupRouter.get("/create", createGroup)

//delete grop by id
groupRouter.get("/delete/:id", () => {} )

//add user to grop
groupRouter.get("/addUser/:id", () => {} )

//delete user from grop
groupRouter.get("/deleteUser/:id", () => {} )

export default groupRouter

