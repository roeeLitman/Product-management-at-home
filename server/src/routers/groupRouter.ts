import {Router} from "express";

const listRouter = Router()

// get grop by id
listRouter.get("/:id", () => {} )

//create new grop
listRouter.get("/create", () => {} )

//delete grop by id
listRouter.get("/delete/:id", () => {} )

//add user to grop
listRouter.get("/addUser/:id", () => {} )

//delete user from grop
listRouter.get("/deleteUser/:id", () => {} )

export default listRouter

