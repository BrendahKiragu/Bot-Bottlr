import React, { useState } from "react";

function BotCard({ bot, onDelete, onAddBot }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  function handleDelete(e) {
    e.preventDefault();
    onDelete(bot.id);
  }

  function handleAddBot(e) {
    e.preventDefault();
    onAddBot(bot);
  }

  return (
    <div className="bot-card" onClick={toggleDetails}>
      <img src={bot.avatar_url} alt={bot.name} />
      <span>{bot.id}</span>
      {showDetails && (
        <>
          <button id="delete" onClick={handleDelete}>
            X
          </button>
          <button id="add" onClick={handleAddBot}>Add Bot</button>

          <h2>{bot.name}</h2>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Class: {bot.bot_class}</p>
          <p className="catch-phrase">Catchphrase: {bot.catchphrase}</p>
          <p>Created At: {new Date(bot.created_at).toLocaleDateString()}</p>
          <p>Updated At: {new Date(bot.updated_at).toLocaleDateString()}</p>
        </>
      )}
    </div>
  );
}

export default BotCard;
