const Reservation = require('../models/Reservation')

exports.createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body)
    await reservation.save()
    res.json({ message: 'Reservation created', reservation })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
