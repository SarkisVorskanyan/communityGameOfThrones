import Logger from "../logger/Logger.js";
import RoleModal from "../database/models/RoleModal.js";
import {CREATE_NEW_ROLE_ERROR, getMessage} from "../configs/Messages.js";
import ApiError from "../error/ApiError.js";

class AuthController {
    async createRole(req, res, next){
        try{
            const {role} = req.body
            const candidate = await RoleModal.findOne({value: role})
            if(candidate){
                throw ApiError.badRequest(CREATE_NEW_ROLE_ERROR)
            }
            await RoleModal.create({value: role})
            res.json({message: 'Success'})

        }catch (e) {
            Logger.error(e)
            next(e)
        }
    }

}

export default new AuthController