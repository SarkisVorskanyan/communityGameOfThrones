import express from 'express'
import mongoose from 'mongoose';
import ErrorHandlingMiddleware from './middleware/ErrorHandlingMiddleware.js';
import router from './router/index.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import corsMiddleware from './middleware/CorsMiddleware.js'


const PORT = process.env.PORT || 8000
const DB_URL = process.env.DB_URL
const app = express()

app.use(express.json())
app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true,
    })
);
app.use(cookieParser())
app.use('/api', router)
app.use(ErrorHandlingMiddleware)




const start = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server start work on ${PORT}`))
    } catch (error) {
        console.log(error, ' error server')
    }
}

start()