const Restaurant = require('../models/Restaurant')
const MenuItem = require('../models/MenuItem')

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()
    res.json(restaurants)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getMenuByRestaurant = async (req, res) => {
  try {
    const menu = await MenuItem.find({ restaurantId: req.params.id })
    res.json(menu)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
