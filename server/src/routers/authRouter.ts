import {NextFunction, Request, Response, Router} from "express";
import { createUser, login } from "../controllers/authController";

const auothRouter = Router()

// login
auothRouter.get("/login", login)

// register
auothRouter.post("/register", createUser) 

export default auothRouter