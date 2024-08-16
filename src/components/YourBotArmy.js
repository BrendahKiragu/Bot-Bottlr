import React, { useState } from "react";

function YourBotArmy({ bots, onRemoveBotFromArmy }) {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div id="your-bot-army" onClick={toggleDetails}>
      <h2>Create Your Bot Army</h2>
      {bots.map((bot) => (
        <div className="bot-card" key={bot.id}>
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
                <p> Catchphrase={bot.catchphrase}</p>
                <p>Created At={bot.created_at}</p>
                <p> Updated At={bot.updated_at}</p>
              </li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
export default YourBotArmy;
