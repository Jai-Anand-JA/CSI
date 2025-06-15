const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route: Home
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route: About
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
