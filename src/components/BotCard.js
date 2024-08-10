import React from "react";

function BotCard ({  key,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  avatar_url,
  created_at,
  updated_at}){
  return(
  <div id="bot-card">
      <img src={avatar_url} alt={name} />
      
      <h2>{name}</h2>
      <p>Health: {health}</p>
      <p>Damage: {damage}</p>
      <p>Armor: {armor}</p>
      <p>Class: {bot_class}</p>
      <p>Catchphrase: {catchphrase}</p>
      <p>Created At: {new Date(created_at).toLocaleDateString()}</p>
      <p>Updated At: {new Date(updated_at).toLocaleDateString()}</p>
  </div>
  )
}

export default BotCard;
