# MERN UI Library Web App

Welcome to the MERN UI Library Web App! This web application allows users to create their own UI elements, which can be showcased on the home page. This README will guide you through setting up and using the application.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)

## Features
- **Create UI Elements**: Users can create their own UI components.
- **Showcase UI Elements**: Display created UI components on the home page for everyone to see.

## Tech Stack

- **MongoDB**: Database for storing user information and UI elements.
- **Express.js**: Backend framework for handling API requests and server-side logic.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime environment for running the server-side code.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running on your machine, or access to a MongoDB Atlas cluster.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sen-Saptarshi/ui-library.git
   cd ui-library
   ```

2. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:

   ```bash
   cd ../client
   npm install
   ```

## Running the Application

1. Start the MongoDB server if it is not already running.

2. Configure environment variables:
   
   Create a `.env` file in the `server` directory and add the following:

   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   ```

3. Start the server:

   ```bash
   cd server
   npm start
   ```

   The server will run on `http://localhost:5000`.

4. Start the client:

   ```bash
   cd ../client
   npm run dev
   ```

   The client will run on `http://localhost:5173`.

## Project Structure

```
ui-library/
├── client/                  # React frontend
│   ├── public/              # Public assets
│   └── src/                 # Source files
│       ├── components/      # React components
│       ├── api/             # Connect to backend
│       ├── App.js           # Main App component
│       └── index.js         # Entry point
├── server/                  # Express backend
│   ├── models/              # Mongoose models
│   ├── routes/              # API routes
│   ├── server.js            # Entry point
│   └── .env                 # Environment variables
├── README.md
```

## Usage
1. **Create UI Elements**: Navigate to the create page, build your UI element, and save it.
2. **Showcase**: View and interact with UI elements created by all users on the home page.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a pull request.

---

Thank you for using the UI Library Web App! If you have any questions or need further assistance, please feel free to reach out. Happy coding!