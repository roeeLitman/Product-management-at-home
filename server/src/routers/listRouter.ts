import {Router} from "express";
import { createNewList } from "../controllers/listCOntroller";

const listRouter = Router()

//get all lists
listRouter.post("/", () => {} )

//create new list
listRouter.post("/create", createNewList )

//delete list by id
listRouter.delete("/delete", () => {} )

//update list by id
listRouter.put("/update", () => {} )


export default listRouter