import {NextFunction, Request, Response, Router} from "express";
import { createUser, login } from "../controllers/authController";

const auothRouter = Router()

// login
auothRouter.post("/login", login)

// register
auothRouter.post("/register", createUser) 

export default auothRouter