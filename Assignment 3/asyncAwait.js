const fs = require('fs').promises

async function readFile() {
  try {
    const data = await fs.readFile('input.txt', 'utf8')
    console.log('Data:', data)
  } catch (err) {
    console.error('Error:', err)
  }
}

readFile()
