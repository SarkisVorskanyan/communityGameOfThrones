import TokenServices from '../services/TokenServices.js';
import ApiError from './../error/ApiError.js';

export const AuthMiddleware = (req, res, next) => {
        if(req.method === 'OPTIONS'){
            next()
        }

        try{
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return next(ApiError.UnauthorizedError())
            }
            const userData = TokenServices.validateToken(token, process.env.JWT_ACCESS_TOKEN)
            if(!userData){
                 return next(ApiError.UnauthorizedError())
             }
             req.user = userData
            next()
        }
        catch (e) {
            console.log(e, ' error')
            return next(ApiError.UnauthorizedError())
        }
}