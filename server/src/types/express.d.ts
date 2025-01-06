import "express";

interface UserPayload {
    _id: string;
    name: string;
    lastName: string;
    groups: string[];
    __v: number;
    iat: number;
    exp: number;
}

declare module "express" {
    interface Request {
        user?: UserPayload
    }
}
