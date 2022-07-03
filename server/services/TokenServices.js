import jwt from 'jsonwebtoken'
import TokenModel from '../database/models/TokenModel.js'

class TokenServices {
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken){
        const tokenData = await TokenModel.findOne({user: userId})
        if(tokenData){
            tokenData.refreshToken = refreshToken
            return tokenData.save()
        }
        const token = await TokenModel.create({user: userId, refreshToken})
        return token
    }

    async removeToken(refreshToken){
        const tokenData = await TokenModel.deleteOne({refreshToken})
        return tokenData
    }

    validateToken(token, env){
        try{
            const userData = jwt.verify(token, env)
            return userData
        }catch(e){
            return null
        }
    }

    async findToken(token){
        const tokenData = await TokenModel.findOne({token})
        return tokenData
    }
    
}

export default new TokenServices()