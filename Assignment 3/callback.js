const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error:', err)
  console.log('Data:', data)
})
