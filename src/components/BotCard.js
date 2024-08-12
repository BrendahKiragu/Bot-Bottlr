import React, { useState } from "react";

function BotCard({
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
  onDelete,
  onAddBot
}) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

 function handleDelete(e){
    e.stopPropagation(); 
    if (window.confirm(`Are you sure you want to delete bot ${name}?`)) {
      onDelete(id);
    }
  };

  const addBot = () => {
    onAddBot({
      id,
      name,
      health,
      damage,
      armor,
      bot_class,
      catchphrase,
      avatar_url,
      created_at,
      updated_at
    });
  };

  return (
    <div className="bot-card" onClick={toggleDetails}>
      <img src={avatar_url} alt={name} />
      {showDetails && (
        <>
          <button
            id="delete"
            onClick={handleDelete}
            // style={{ position: 'absolute', top: '5px', right: '5px', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
          >
            X
          </button>
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
      <button onClick={()=>addBot(id)}>
        Add Bot</button>
    </div>
  );
}

export default BotCard;
