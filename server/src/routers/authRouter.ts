import {NextFunction, Request, Response, Router} from "express";
import { createUser } from "../controllers/authController";

const auothRouter = Router()

// login
auothRouter.get("/login", () => {} )

// register
auothRouter.get("/register", createUser) 

export default auothRouter