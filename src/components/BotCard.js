import React, {useState} from "react";

function BotCard ({ id, name, health, damage, armor, bot_class, catchphrase,
  avatar_url, created_at, updated_at, onDelete}){

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  }


 function handleDelete(e){
   e.preventDefault();
   onDelete(id);
 }

  return(
  <div id="bot-card" onClick={toggleDetails}>

      <button id= "delete"
       onClick={handleDelete}>X</button>
      <img src={avatar_url} alt={name} />
      
      {showDetails && (
        <>
          <span style={{position: 'absolute'}}>{id}</span>
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
      <button>Add Bot</button>     
 </div>
  )
}

export default BotCard;
