const express = require('express')
const http = require('http')
const cors = require('cors')
const morgan = require('morgan')
const CheckoutRoutes = require('./Routes/Checkout')

const application = express()

const server = http.createServer(application)

/* Settings */
application.use(cors())
application.use(express.json())

/* Middlewares */
application.use(morgan('dev'))

/* Routes */
application.use(CheckoutRoutes)

const PORT = 8000
server.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port ${PORT}`)
)
