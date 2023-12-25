import app from '.'

const port = process.env.PORT || 3000

const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log('Fail to initialize server: ', error)
        process.exit(1)
    }
}

startServer().then(() => {})
