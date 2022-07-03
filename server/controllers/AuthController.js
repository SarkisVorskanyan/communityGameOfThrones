import UserModel from '../database/models/UserModel.js';
import TokenServices from '../services/TokenServices.js';
import UserServices from './../services/UserServices.js';
import bcrypt from 'bcrypt'
import { UserDataToken_dto } from '../dto/UserDataToken_dto.js';
import { validationResult } from "express-validator";
import { User_dto } from './../dto/User_dto.js';
import { VALIDATION_ERROR } from './../configs/Messages.js';
import logger from '../logger/Logger.js';
import * as uuid from 'uuid';
import MailServices from '../services/MailServices.js';
import RoleModal from '../database/models/RoleModal.js';

class AuthController {
    async registration(req, res, next){
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(422).json({message: VALIDATION_ERROR, errors})
            }
            const {email, password, nickname} = req.body
            await UserServices.checkAuth(email, nickname)
            const hashPassword = await bcrypt.hash(password, 3)
            const activationLink = uuid.v4()
            const userRole = await RoleModal.findOne({value: 'user'})
            const User = await UserModel.create({email, password: hashPassword, nickname, activationLink, role: [userRole.value]})
            await MailServices.sendActivationMail(email, `${process.env.API_WEB_URL}/api/auth/activate/${activationLink}`)
            const user = new User_dto(User)
            const UserDataToken = new UserDataToken_dto(User)
            const tokens = TokenServices.generateTokens({...UserDataToken})
            await TokenServices.saveToken(UserDataToken.id, tokens.refreshToken)
            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.json({
                ...tokens,
                user
            })
        }catch(e){
            console.log(e);
        }
    }

    async login(req, res, next){
        try {
            const {email, password} = req.body
            const user = await UserServices.checkLogin(email, password)
            const User = new User_dto(user)
            const UserDataToken = new UserDataToken_dto(user)
            const tokens = TokenServices.generateTokens({...UserDataToken})
            await TokenServices.saveToken(UserDataToken.id, tokens.refreshToken)
            res.json({
                ...tokens,
                User
            })
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next){
        try {
            const {refreshToken} = req.cookies
            const token = await TokenServices.removeToken(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (error) {
            next(error)
        }
    }

    async refresh(req, res, next){
        try {
            const {refreshToken} = req.cookies
            const userData = await UserServices.refresh(refreshToken)
            
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }

    async activate(req, res, next){
        try{
            const activationLink = req.params.link
            await UserServices.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        }catch (e) {
            next(e)
        }
    }

    async getUsers(req, res, next){
        try{
            console.log(req.headers.authorization)
            const users = await UserModel.find()
            return res.json(users)
        }catch (e) {
            next(e)
        }
    }
}

export default new AuthController