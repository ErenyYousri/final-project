const express = require('express')
const cors = require('cors')
require('./db/mongoose')

const app = express()
app.use(express.json())

app.use(cors())
 
const userRoutes = require('./routes/users')
const flightsRoutes = require('./routes/flights')
const bookingRoutes =require('./routes/booking')
const port = process.env.PORT || 3000
app.use(userRoutes)
app.use(flightsRoutes)
app.use(bookingRoutes)
app.listen(port)