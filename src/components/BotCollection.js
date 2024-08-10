import React, {useState, useEffect} from 'react';
import BotCard from './BotCard';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bots')
     .then((response) => response.json())
     .then((data) => setBots(data));
    //  .catch((error) => console.error('Error:', error));
  }, []);

  // Bots are added here as list items in the ul tag
  // fetched bots from db.json
  // map through fetched bots and render as list items
const botObj = bots.map((bot)=>({
  key: bot.id,
  name: bot.name,
  health: bot.health,
  damage: bot.damage,
  armor: bot.armor,
  bot_class: bot.bot_class,
  catchphrase: bot.catchphrase,
  avatar_url: bot.avatar_url,
  created_at: bot.created_at,
  updated_at: bot.updated_at
}))
// console.log(botObj)

return(
  <div id="bot-collection">
    <h2>Bot Collection</h2>
    <ul>
      {botObj.map((bot) => (
        <BotCard
          key={bot.key}
          name={bot.name}
          health={bot.health}
          damage={bot.damage}
          armor={bot.armor}
          bot_class={bot.bot_class}
          catchphrase={bot.catchphrase}
          avatar_url={bot.avatar_url}
          created_at={bot.created_at}
          updated_at={bot.updated_at}
        />
      ))}
    </ul>
  </div>
 );
}

export default BotCollection;