import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // deletes a bot from UI and backend, with a delete confirmation message
  const eraseBot = (id) => {
    fetch(`http://localhost:4000/bots/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setBots(bots.filter((bot) => bot.id !== id));
        } else {
          return `Error deleting the bot, please try again later`;
        }
      })
      .catch((error) => {
        console.error("Delete request failed, please try again later:", error);
      });
  };

  function onRemoveBotFromArmy(id) {
    const updatedBotArmy = yourBotArmy.filter((bot) => bot.id !== id);
    setYourBotArmy(updatedBotArmy);
  }

  // function to add a bot to yourbotarmy component
  function onAddBot(selectedBot) {
    if (yourBotArmy.find((bot) => bot.id === selectedBot.id)) {
      alert("Bot already in your bot army!");
    } else {
      setYourBotArmy([...yourBotArmy, selectedBot]);
    }
  }

  return (
    <div className="bot-collection">
      <div className="bots-list">
        <h2>Bot Collection</h2>
        <ul id="bot-list">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onDelete={eraseBot}
              onAddBot={onAddBot}
            />
          ))}
        </ul>
      </div>

      <div id="your-bot-army">
        <YourBotArmy
          bots={yourBotArmy}
          onRemoveBotFromArmy={onRemoveBotFromArmy}
        />
      </div>
    </div>
  );
}

export default BotCollection;
