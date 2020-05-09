const express = require('express')
const cors = require('cors')

const usersRouter = require('./routes/user')
const postsRouter = require('./routes/post')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(cors())

// Routers

app.use('/users', usersRouter)
app.use('/posts', postsRouter)
app.use('/auth', authRouter)

module.exports = app
