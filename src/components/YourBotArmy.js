import React from "react";

function YourBotArmy ({bots}) {
  return(
  <div id ="your-bot-army">
    <h2>Create Your Bot Army</h2>
    <ul>
     {bots.map(bot => (
      <li id ="your-bot-army" key={bot.id}>
         <img src={bot.avatar_url} alt={bot.name} />
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
     ))}
    </ul>
  </div>
  )
}
export default YourBotArmy;
