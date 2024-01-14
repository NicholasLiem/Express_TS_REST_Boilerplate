import app from '.'

const port = process.env.PORT !== undefined ? parseInt(process.env.PORT, 10) : 3000

const startServer = async (): Promise<void> => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.error('Fail to initialize server:', error)
        process.exit(1)
    }
}

startServer().catch(error => {
    console.error('Unhandled error during server startup:', error)
    process.exit(1)
})
