import Logger from "../logger/Logger.js";
import UserModel from "../database/models/UserModel.js";
import UserServices from "../services/UserServices.js";

class UserController {
    async getUsers(req, res, next) {
        try {
            let {limit, page} = req.query
            page = page || 1
            limit = limit || 5
            let offset = page * limit - limit
            const users = await UserServices.getUsers(limit, offset)
            res.json(users)
        } catch (e) {
            Logger.error(e)
            next(e)
        }
    }

}

export default new UserController()
