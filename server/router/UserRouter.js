import {Router} from "express";
import UserController from "../controllers/UserController.js";
import {RoleMiddleware} from "../middleware/RoleMiddleware.js";

const router = new Router

router.get('/getUsers', RoleMiddleware(['owner', 'admin']), UserController.getUsers)


export default router