import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import { check } from "express-validator";
import { EMAIL_INCORRECT, PASSWORD_INCORRECT, REQUIRED_NAME } from './../configs/Messages.js';
import {AuthMiddleware} from './../middleware/AuthMiddleware.js';
import { RoleMiddleware } from './../middleware/RoleMiddleware.js';

const router = new Router

router.post('/registration', [
    check('email', EMAIL_INCORRECT).isEmail().notEmpty(),
    check('password', PASSWORD_INCORRECT).isLength({min: 4, max: 10}).notEmpty(),
    check('nickname', REQUIRED_NAME).notEmpty()
], AuthController.registration)
router.post('/login', AuthController.login)
router.get('/logout', AuthController.logout)
router.get('/refresh', AuthController.refresh)
router.get('/activate/:link', AuthController.activate)
router.post('/forgetPass', AuthController.forgetPass)
router.post('/resetPass/:token', AuthController.resetPass)
router.get('/user', AuthMiddleware, AuthController.getUsers)


export default router