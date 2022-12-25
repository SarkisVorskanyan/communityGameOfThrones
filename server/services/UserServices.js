import UserModel from "../database/models/UserModel.js"
import ApiError from './../error/ApiError.js';
import bcrypt from 'bcrypt'
import { EMAIL_INCORRECT, getMessage, INCORRECT_LINK, PASSWORD_INCORRECT } from './../configs/Messages.js';
import TokenServices from "./TokenServices.js";
import {User_dto} from "../dto/User_dto.js";
import tokenServices from "./TokenServices.js";

class UserServices {
    async checkAuth(email, nickname) {
        const candidate = await UserModel.findOne({email})
        if(candidate){
            let error = getMessage('error-email', email)
            throw ApiError.badRequest(error)
        }
        
        const name = await UserModel.findOne({nickname})
        if(name){
            let error = getMessage('error-nickname', nickname)
            throw ApiError.badRequest(error)
        }
        return true
    }

    async checkLogin(email, password){
         const user = await UserModel.findOne({email})
        if(!user){
            throw ApiError.badRequest(EMAIL_INCORRECT)
        }
         const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals){
            throw ApiError.badRequest(PASSWORD_INCORRECT)
        }
        return user
    }

    async refresh(refreshToken){
        if(!refreshToken){
            throw ApiError.UnauthorizedError()
        }
        const userData = TokenServices.validateToken(refreshToken, process.env.JWT_REFRESH_TOKEN)
        const tokenFromDB = await TokenServices.findToken(refreshToken)
        if(!userData || !tokenFromDB){
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData._id);
        const userDto = new User_dto(user);
        const tokens = tokenServices.generateTokens({...userDto});
        await tokenServices.saveToken(userDto._id, tokens.refreshToken);
        return {...tokens, user: userDto}
    }

    async activate(activationLink){
        const user = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.badRequest(INCORRECT_LINK)
        }
        user.isActivated = true
        await user.save()
    }

    async getUsers(limit, offset){
        const users = await UserModel.aggregate([
            { "$facet": {
                    "users": [
                        { "$match": { }},
                        { "$skip": offset },
                        { "$limit": 10 }
                    ],
                    "totalCount": [
                        { "$group": {
                                "_id": null,
                                "count": { "$sum": 1 }
                            }}
                    ]
                }}
        ])
        return {
            users: users[0]?.users,
            totalCount: users[0].totalCount[0].count,
        }
    }

  
}

export default new UserServices()