import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors({ origin: '*', credentials: true }))

app.use(`/`, (req, res) => {
  res.status(200).json({
    email: 'oaikhenahjob@gmail.com',
    current_datetime: new Date().toISOString(),
    github_url: 'https://github.com/Joblyn/basic_info_public_api'
  })
})

export default app
