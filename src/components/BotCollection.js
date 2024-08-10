import React, {useState, useEffect} from 'react';
import BotCard from './BotCard';

function BotCollection() {
  return(
    <div id="bot-collection">
      <h2>Bots collection</h2>
      <BotCard />
    </div>
  )
}
export default BotCollection;