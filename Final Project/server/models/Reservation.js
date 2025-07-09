const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  user_name: String,
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  date_time: Date,
  special_request: String
})

module.exports = mongoose.model('Reservation', reservationSchema)
