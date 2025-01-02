import {NextFunction, Request, Response, Router} from "express";
import { createUser } from "../controllers/authController";

const auothRouter = Router()

// login
auothRouter.get("/login", () => {} )

// register
auothRouter.post("/register", createUser) 

export default auothRouter