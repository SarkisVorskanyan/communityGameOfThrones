import { Router } from "express";
import AuthRouter from './AuhRouter.js'
import AdminRouter from "./AdminRouter.js";


const router = new Router

router.use('/auth', AuthRouter)
router.use('/admin', AdminRouter)

export default router