import { Router } from "express";
import AuthRouter from './AuhRouter.js'


const router = new Router

router.use('/auth', AuthRouter)

export default router