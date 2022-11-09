//this piese of code are used to show the list of all products to only authenticated users.

import { Request, Response, NextFunction } from "express";
import { JWT_SECRET } from "../util/secrets";
import { ForbiddenError } from "../helpers/apiError";
import jwt  from "jsonwebtoken";


export default function(req:Request, res:Response, next: NextFunction) {
    try{
        const authorizationHeader = req.headers.authorization
        if(authorizationHeader) {
            console.log('authorizationHeader', authorizationHeader)
            const token = authorizationHeader.split(' ')[1]

            // here we need to verify the user through jwt 
            const decodedUser =jwt.verify(token, JWT_SECRET)
            console.log('decodedUser', decodedUser)

            req.user = decodedUser
            return next()
        }
        throw new ForbiddenError
    } catch(error){
        throw new ForbiddenError 

    }
}