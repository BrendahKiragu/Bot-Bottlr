import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";
import YourBotArmy from "./YourBotArmy";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();

function BotCollection() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  // deletes a bot from UI and backend, with a toast confirmation message
  const eraseBot = (id) => {
    //to show a confirmation toast
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete this bot?</p>
          <button
            style={{ margin: "15px", color: "red" }}
            onClick={() => {
              deleteBot(id);
              closeToast();
            }}
          >
            yes
          </button>
          <button
            style={{ margin: "15px", color: "green" }}
            onClick={() => {
              closeToast();
            }}
          >
            no
          </button>
        </div>
      ),
      { autoClose: false }
    );
  };

  function deleteBot(id) {
    fetch(`http://localhost:4000/bots/${id}`, { method: "DELETE" }).then(() => {
      const updatedBotCollection = bots.filter((bot) => bot.id !== id);
      setBots(updatedBotCollection);
      toast.success("Bot deleted successfully!", { autoClose: 2000 });
    });
  }

  function onRemoveBotFromArmy(id) {
    const updatedBotArmy = yourBotArmy.filter((bot) => bot.id !== id);
    setYourBotArmy(updatedBotArmy);
    // toast.success("Bot removed from your bot army!");
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
              onDelete={() => eraseBot(bot.id)}
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
      <ToastContainer />
    </div>
  );
}

export default BotCollection;
