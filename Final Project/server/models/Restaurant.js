const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  location: String,
  price_range: Number
})

module.exports = mongoose.model('Restaurant', restaurantSchema)
