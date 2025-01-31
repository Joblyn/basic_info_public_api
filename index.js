import app from './app.js'

const PORT = 8800

async function startServer () {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()
