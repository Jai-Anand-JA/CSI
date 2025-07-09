const express = require('express')
const router = express.Router()
const controller = require('../controllers/reservationController')

router.post('/', controller.createReservation)

module.exports = router
