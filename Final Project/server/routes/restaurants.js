const express = require('express')
const router = express.Router()
const controller = require('../controllers/restaurantController')

router.get('/', controller.getAllRestaurants)
router.get('/:id/menu', controller.getMenuByRestaurant)

module.exports = router
