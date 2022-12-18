import express from 'express'
import mongoose from 'mongoose';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';
import router from './router/index.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import corsMiddleware from './middleware/CorsMiddleware.js'
import session from "express-session";
import logger from "./logger/Logger.js";
import TestModel from "./database/models/TestModel.js";


const PORT = process.env.PORT || 8000
const DB_URL = process.env.DB_URL
const app = express()


app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true,
    })
);
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
app.use(ErrorHandlingMiddleware)

app.post('/createTest', async (req, res) => {
    try {
        const {name} = req.body
        await TestModel.create({name})
        res.send('success')
    }catch (e) {
        logger.error(e)
    }
})

app.get('/test', async (req, res) => {
    try {
        const test = await TestModel.find({"updatedAt":{$lt: new Date(Date.now() - 1 * 60 * 1000)}});
        res.json(test)
    }catch (e) {
        logger.error(e)
    }
})

app.put('/testChange/:name', async (req, res) => {
    try {
        const {name} = req.params
        const test = await TestModel.findOneAndUpdate({name}, {name: 'change'}, {new: true});
        res.json(test)
    }catch (e) {
        logger.error(e)
    }
})



const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server start work on ${PORT}`))
    } catch (error) {
        console.log(error, ' error server')
    }
}

start()