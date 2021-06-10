
const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')

const server = express()
server.use(cors())
server.use(express.json())

server.use('/users', userRouter)
server.use('/auth', authRouter)
server.get('/', (request, response) => {
  response.json({
    application: 'Api AB inBev',
    developers: [
      { name: 'Juan Carlos Hernandez' }
    ]
  })
})

const errorHandler = (err, req, res, next) => {
  if (res.headersSent)
  {
    return next(err)
  }

  console.error(err)

  res.status(500).json({ error: err.message })
}

server.use(errorHandler)

module.exports = server
