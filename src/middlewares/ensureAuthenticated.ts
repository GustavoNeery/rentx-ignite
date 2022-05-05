import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { User } from "../modules/accounts/entities/User";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPaylod {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing", 401);
    }

    const[, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(token, "3c977e43bcde29296db9249ca5153922") as IPaylod;
        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);

        if(!user) {
            throw new AppError("User does not exists!", 401);
        }

        next();
    }catch{
        throw new AppError("Invalid token!", 401);
    }


}