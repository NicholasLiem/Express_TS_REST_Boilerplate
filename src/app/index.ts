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

async function main (): Promise<void> {
    await initContainer()
        .then((serviceContainer) => {
            routes(app, serviceContainer)
        })
        .catch((error) => {
            console.error('Error during initialization:', error)
            process.exit(1)
        })
}

main().catch((error) => {
    console.error('Unhandled error during main execution:', error)
    process.exit(1)
})

export default app
