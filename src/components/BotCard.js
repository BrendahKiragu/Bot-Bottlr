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

  const {
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
    avatar_url,
    created_at,
    updated_at,
  } = bot;

  return (
    <div className="bot-card" onClick={toggleDetails}>
      <img src={avatar_url} alt={name} />
      {showDetails && (
        <>
          <button id="delete" onClick={handleDelete}>
            X
          </button>
          <button onClick={handleAddBot}>Add Bot</button>
          <span>{id}</span>
          <h2>{name}</h2>
          <p>Health: {health}</p>
          <p>Damage: {damage}</p>
          <p>Armor: {armor}</p>
          <p>Class: {bot_class}</p>
          <p>Catchphrase: {catchphrase}</p>
          <p>Created At: {new Date(created_at).toLocaleDateString()}</p>
          <p>Updated At: {new Date(updated_at).toLocaleDateString()}</p>
        </>
      )}
    </div>
  );
}

export default BotCard;
