# RestaurantBot

This project is a Restaurant Management Assistant. It includes:

- RESTful API built with Node.js, Express, and MongoDB (via Mongoose)
- Conversational Bot using Microsoft Bot Framework (Node.js + Restify)
- Tested locally with Postman and Bot Framework Emulator.

## Features

- View all restaurants
- View menus by restaurant
- Create reservations
- Chat with a bot to get quick instructions on using the API

## Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- Bot Framework SDK
- Restify
- dotenv

## Folder Structure

RestaurantBot/
 ├── server/
 │    ├── models/
 │    │    ├── Restaurant.js
 │    │    ├── MenuItem.js
 │    │    └── Reservation.js
 │    ├── controllers/
 │    │    ├── restaurantController.js
 │    │    └── reservationController.js
 │    ├── routes/
 │    │    ├── restaurants.js
 │    │    └── reservations.js
 │    └── app.js
 ├── bot/
 │    ├── index.js
 │    └── dialogs/
 │         └── mainDialog.js
 ├── .env
 └── package.json

## Environment Variables (.env)

PORT=3000
MONGO_URI=mongodb://localhost:27017/restaurantdb

## Installation

1. Clone this repository.
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.

## Running the Project

### Start the API server

Server will run on `http://localhost:3000`

### Start the Bot server
Bot will run on `http://localhost:3978/api/messages`

---

## Notes

- Ensure MongoDB is running locally on default port, or update `MONGO_URI` in `.env` to your connection string.
- The bot is simple text-based and gives guidance on using the API.

---

## Author
-Jai Anand
