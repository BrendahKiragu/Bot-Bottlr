# Project Title: Bot Battlr

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About Bot Battlr

Welcome to **Bot Battlr**, the one and only spot in the known universe where you can custom build your own Bot Army!

## Scenario

A galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and enlist a bot into their army.

## User Features

As a user, you will be able to:

- **View Bot Profiles**: See profiles of all bots rendered in the `BotCollection` component.
  
- **Enlist Bots**: Add an individual bot to your army by clicking on it. The selected bot will render in the `YourBotArmy` component. Bots can only be enlisted **once** and will **not** disappear from the `BotCollection`.

- **Release Bots**: Remove a bot from your army by clicking on it. The bot will disappear from the `YourBotArmy` component.

- **Discharge Bots Permanently**: Discharge a bot from service by clicking the red "x" button. This action will delete the bot from both the backend and the `YourBotArmy` on the frontend.

- **View Bot Details**: Choose whether to enlist a bot into your army or just view their details. Clicking on a bot's card will display a detailed view (`BotSpecs`) for that bot, replacing the `BotCollection`. `BotSpecs` will have two buttons: one to go back to the list view and another to enlist that bot.

- **Sort Bots**: Sort bots by their health, damage, or armor. A new component, `SortBar`, will be created to handle this functionality.

- **Enlist Bots to Your Army**: When you enlist a bot, it will be **removed** from the `BotCollection` and added to your `YourBotArmy`.

- **Filter Bots by Class**: Filter bots by their class, with the ability to select multiple filters simultaneously.

- **Enlist Only One Bot per Class**: Only enlist **one** bot from each `bot_class`. The available classes are `["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]`.

## App Structure

The app will be structured into several key components:

1. **BotCollection**: Displays the list of all available bots.
2. **YourBotArmy**: Shows the bots that have been enlisted into your army.
3. **BotSpecs**: Displays detailed information about a selected bot.
4. **SortBar**: Allows sorting bots by different attributes.
5. **FilterBar**: Allows filtering bots by class.

## Getting Started

To get started with this project:

1. Clone the repository.
2. Install the necessary dependencies.
3. Run the development server.
4. Start building your bot army!

## Technologies Used

- React.js
- JavaScript
- CSS
- HTML

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to get started.

## License

This project is licensed under the MIT License.
