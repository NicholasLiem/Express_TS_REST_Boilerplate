import express from 'express'
import dotEnv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { routes } from './routes'
import { initContainer } from './bootstrap'

dotEnv.config()
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

async function main () {
    try {
        const serviceContainer = await initContainer()
        routes(app, serviceContainer)
    } catch (error) {
        console.error('Error during initialization:', error)
        process.exit(1)
    }
}

main()

export default app
