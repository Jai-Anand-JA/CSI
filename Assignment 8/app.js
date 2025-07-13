const express = require('express')
const multer = require('multer')
const axios = require('axios')
const fs = require('fs')
require('dotenv').config()

const app = express()
app.use(express.json())

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})
const upload = multer({ storage })

// Routes
app.get('/', (req, res) => {
  res.send('Week 8 Assignment API')
})

// File upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
  res.json({ message: 'File uploaded', file: req.file })
})

// Third-party API example: Fetch random cat fact
app.get('/catfact', async (req, res, next) => {
  try {
    const response = await axios.get('https://catfact.ninja/fact')
    res.json({ fact: response.data.fact })
  } catch (err) {
    next(err)
  }
})

// Example endpoint triggering error
app.get('/error', (req, res, next) => {
  next(new Error('This is a manual error example'))
})

// Central error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message)
  res.status(500).json({ error: err.message })
})

// Start server
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
)
