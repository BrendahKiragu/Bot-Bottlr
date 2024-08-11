import React, {useState, useEffect} from 'react';
import BotCard from './BotCard';
import YourBotArmy from './YourBotArmy';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/bots')
     .then((response) => response.json())
     .then((data) => setBots(data));
  }, []);

// deletes a bot from UI and backend, with a delete confirmation message
const eraseBot = (id) => {
  const isConfirmed = window.confirm(`Are you sure you want to delete bot ${id}?`);
  if (isConfirmed) {
    fetch(`http://localhost:4000/bots/${id}`, {
      method: 'DELETE',
    })

    .then(res => {
      if (res.ok) {
        setBots(bots.filter((bot)=> bot.id !== id)) 
      } else{
        return `Error deleting the bot, please try again later`
      }
     
    })

    .catch(error => {
      console.error("Delete request failed, please try again later:", error);
    });
  }
};

//Details to be dispalyed from each bot on the BotCard component
const botObj = bots.map((bot)=>({
  id: bot.id,
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


return(
  <div className="bot-collection" >
    
    <ul id='bot-list'>
      <h2>Bot Collection</h2>
      {botObj.map((bot) => (
        <BotCard
          key={bot.id}
          id={bot.id}
          name={bot.name}
          health={bot.health}
          damage={bot.damage}
          armor={bot.armor}
           bot_class={bot.bot_class}
          catchphrase={bot.catchphrase}
          avatar_url={bot.avatar_url}
          created_at={bot.created_at}
          updated_at={bot.updated_at}
          onDelete={eraseBot}
        />
      ))}
    </ul>
    <div className="your-bot-army">
      <YourBotArmy />
    </div>
  </div>

 );
}

export default BotCollection;