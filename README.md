# Project Title: Bot Battlr
Bot Battlr is a React application that allows users to browse through a collection of bots and build their own bot army.

# Table of Contents
1. Features
2. Getting Started
3. App Structure
4. API Endpoints
5. Libraries Used
6. Acknowledgements

See the live app here: https://brendahkiragu.github.io/Bot-Bottlr/
# Features

 - Fetch bot data from a backend API.
 - Display a list of bots with their details.
 - Delete a bot from the collection.
 - Add a bot to your bot army.
 - Remove a bot from your bot army.
 - Expand and collapse bot details.
 - Toast notifications for successful actions.

# Getting Started

To run this application, follow these steps:
1. Clone the repository:
   - git clone https://github.com/your-username/bot-battlr.git

2. Install dependencies:
   - cd bot-battlr
   - npm install

3. Start the backend server
   - npm run server
   - The server will listen on port 8001/bots

4. Start the frontend React app:
   - npm start 

Now you can access the app in your browser at http://localhost:3000.

 # App Structure

  - **src/components/Header.js:** Contains the App header.
  - **src/components/BotCard.js:** Contains the UI for a single bot card.
  - **src/components/BotCollection.js:** Contains the main logic for managing the bot collection and your bot army.
  - **src/pages/YourBotArmy.js:** Contains the UI for displaying your bot army.
  - **src/App.js:** The main app component.
  - **src/App.css:** The styling of the app's components.

  ## API Endpoints
  - GET http://localhost:8001/bots: Fetch the list of bots.
  - DELETE http://localhost:8001/bots/:id: Delete a bot by its ID.

  ## Libraries Used
   1. React
   2. React Toastify: For displaying toast notifications.

# Acknowledgements

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
