import {Router} from "express";
import AuthController from "../controllers/AuthController.js";
import {AuthMiddleware} from './../middleware/AuthMiddleware.js';
import {RoleMiddleware} from "../middleware/RoleMiddleware.js";
import AdminController from "../controllers/AdminController.js";

const router = new Router

router.post('/createRole', RoleMiddleware(['owner']), AdminController.createRole)


export default router