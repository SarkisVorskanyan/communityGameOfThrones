import UserModel from "../database/models/UserModel.js"
import ApiError from './../error/ApiError.js';
import bcrypt from 'bcrypt'
import { EMAIL_INCORRECT, getMessage, INCORRECT_LINK, PASSWORD_INCORRECT } from './../configs/Messages.js';
import TokenServices from "./TokenServices.js";

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
        const tokenFromDB = TokenServices.findToken(refreshToken)
        if(!userData || !tokenFromDB){
            throw ApiError.UnauthorizedError()
        }
    }

    async activate(activationLink){
        const user = await UserModel.findOne({activationLink})
        if(!user){
            throw ApiError.badRequest(INCORRECT_LINK)
        }
        user.isActivated = true
        await user.save()
    }

  
}

export default new UserServices()