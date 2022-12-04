import { Router } from "express";
import AuthRouter from './AuhRouter.js'
import AdminRouter from "./AdminRouter.js";
import UserRouter from "./UserRouter.js";


const router = new Router

router.use('/auth', AuthRouter)
router.use('/admin', AdminRouter)
router.use('/users', UserRouter)

export default router