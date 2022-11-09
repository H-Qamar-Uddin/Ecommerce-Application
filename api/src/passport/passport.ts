import GoogleTokenStrategy from "passport-google-id-token";
import { GOOGLE_CLIENT_ID } from "../util/secrets";
import { ParsedToken, VerifiedCallback } from "../types/types";
import User from "../models/User";


export default function() {
    return new GoogleTokenStrategy({
        clientID: GOOGLE_CLIENT_ID
    }, async(
        parsedToken: ParsedToken, 
        googleId: string, 
        done: VerifiedCallback
    ) => {
        try {
        console.log('googleId', googleId)
        console.log('parsedToken', parsedToken)

        let user:any = await User.findOne({email: parsedToken.payload.email}) 
        if (!user) {
            user  = new User ({
                email: parsedToken.payload.email,
                name: parsedToken.payload.name,
                given_name: parsedToken.payload.given_name,
                family_name: parsedToken.payload.family_name,
                isAdmin: false
            })
            user.save()
        }
        done(null, {user})
     } catch(error) {
        done(error)
     }
    })
}