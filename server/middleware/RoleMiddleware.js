import { ADMIN_ERROR } from '../configs/Messages.js';
import TokenServices from '../services/TokenServices.js';
import ApiError from './../error/ApiError.js';

export const RoleMiddleware = (roles) => {
    return function (req, res, next){
        if(req.method === 'OPTIONS'){
            next()
        }

        try{
            const token = req.headers.authorization.split(' ')[1]
            console.log(token, 'token')
            if(!token){
                return next(ApiError.UnauthorizedError())
            }
            const {role: userRole} = TokenServices.validateToken(token, process.env.JWT_ACCESS_TOKEN)
            console.log(userRole, ' userRole')
            let hasRole = false
            userRole.forEach(role => {
                console.log(role, ' role')
                if(roles.includes(role)){
                    hasRole = true
                }
            })
            if(!hasRole){
                return next(ApiError.UnauthorizedError(ADMIN_ERROR))
            }
            next()
        }
        catch (e) {
            console.log(e)
            return next(ApiError.UnauthorizedError())
        }
    }
}