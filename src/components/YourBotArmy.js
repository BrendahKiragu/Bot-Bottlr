import React, { useState } from "react";

function YourBotArmy({ bots, onRemoveBotFromArmy }) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div id="your-bot-army">
      <h2>Welcome to the Battle of the Bots</h2>
      <p>Create Your Bot Army Here</p>
      <div className="bot-cards-container">
        {bots.map((bot) => (
          <div className="bot-card" key={bot.id} onClick={toggleDetails}>
            <img src={bot.avatar_url} alt={bot.name} />

            {showDetails && (
              <ul>
                <button onClick={() => onRemoveBotFromArmy(bot.id)}>
                  Remove
                </button>
                <li>
                  <p> id={bot.id}</p>
                  <p> Name={bot.name}</p>
                  <p> Health={bot.health}</p>
                  <p> Damage={bot.damage}</p>
                  <p> Armor={bot.armor}</p>
                  <p> Class={bot.bot_class}</p>
                  <p className="catch-phrase"> Catchphrase={bot.catchphrase}</p>
                  <p>Created At={bot.created_at}</p>
                  <p> Updated At={bot.updated_at}</p>
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default YourBotArmy;
