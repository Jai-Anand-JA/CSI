const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err))

app.use('/api/restaurants', require('./routes/restaurants'))
app.use('/api/reservations', require('./routes/reservations'))

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)
