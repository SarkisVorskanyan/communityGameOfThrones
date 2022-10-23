import UserModel from '../database/models/UserModel.js';
import TokenServices from '../services/TokenServices.js';
import UserServices from './../services/UserServices.js';
import bcrypt from 'bcrypt'
import { UserDataToken_dto } from '../dto/UserDataToken_dto.js';
import { validationResult } from "express-validator";
import { User_dto } from './../dto/User_dto.js';
import {
    EMAIL_INCORRECT,
    getMessage, INCORRECT_LINK,
    SUCCESS_SEND_RESET_PASS,
    SUCCESS_SIGNUP,
    VALIDATION_ERROR
} from './../configs/Messages.js';
import logger from '../logger/Logger.js';
import * as uuid from 'uuid';
import MailServices from '../services/MailServices.js';
import RoleModal from '../database/models/RoleModal.js';
import ApiError from "../error/ApiError.js";
import jwt from "jsonwebtoken";
import Logger from "../logger/Logger.js";

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
            await UserModel.create({email, password: hashPassword, nickname, activationLink, role: [userRole.value]})
            await MailServices.sendActivationMail(email, `${process.env.API_WEB_URL}/api/auth/activate/${activationLink}`)
            Logger.info(`User ${nickname} sign up`, { message: 'world' });
            res.json({message: SUCCESS_SIGNUP})
        }catch(e){
            Logger.error(e)
            next(e)
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
            Logger.error(e)
            next(e)
        }
    }

    async logout(req, res, next){
        try {
            const {refreshToken} = req.cookies
            const token = await TokenServices.removeToken(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            Logger.error(e)
            next(e)
        }
    }

    async refresh(req, res, next){
        try {
            const {refreshToken} = req.cookies
            console.log(refreshToken, ' refreshToken')
            const userData = await UserServices.refresh(refreshToken)

            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            Logger.error(e)
            next(e)
        }
    }

    async activate(req, res, next){
        try{
            const activationLink = req.params.link
            await UserServices.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        }catch (e) {
            Logger.error(e)
            next(e)
        }
    }

    async forgetPass(req, res, next){
        try{
            const {email} = req.body
            const user = await UserModel.findOne({email})
            if(!user){
                throw ApiError.badRequest(EMAIL_INCORRECT)
            }
            const passToken = jwt.sign({email}, process.env.FORGET_PASSWORD_TOKEN, {expiresIn: '5m'})

            await MailServices.SendResetPassword(email, `${process.env.API_WEB_URL}/api/auth/resetPass/${passToken}`)
            user.resetPassLink = passToken
            res.json({message: SUCCESS_SEND_RESET_PASS})
        }catch (e) {
            Logger.error(e)
            next(e)
        }
    }

    async resetPass(req, res, next){
        try{
            const token = req.params.token
            console.log(req.params, ' req.params')
            const existToken = TokenServices.validateToken(token, process.env.FORGET_PASSWORD_TOKEN)
            if(!existToken){
                throw ApiError.badRequest(INCORRECT_LINK)
            }
            const {email} = existToken
            const user = await UserModel.findOne({email})
            if(!user){
                throw ApiError.badRequest(INCORRECT_LINK)
            }
            if(user.resetPassLink !== token){
                console.log(user.resetPassLink, ' user.resetPassLink')
                console.log(token, ' token')
                throw ApiError.badRequest(INCORRECT_LINK)
            }
            user.resetPassLink = token
            await user.save()
            res.redirect(process.env.CLIENT_URL)
        }catch (e) {
            Logger.error(e)
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