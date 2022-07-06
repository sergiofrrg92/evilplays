import React from "react";
import Header from "./Header";
import Main from "./Main";
import GamePopup from "./GamePopup";
import Footer from "./Footer";

import { games } from "../utils/games";
import user from "../utils/user";

function App() {

  const [selectedGame, setSelectedGame] = React.useState(null);

  function handleGameClick(card) {
    console.log("handleGameClick: ", card);
    setSelectedGame(card);
  }

  function handleAddClick(game) {
    const isFound = user.games.some(element => {
      if(element.id === game.id) {
        return true;
      } 

      return false;
    });

    if (!isFound) {
      game.hoursPlayed = 0;
      user.games.push(game);
    }
  }

  function handleRemoveClick(game) {
    user.games.splice(user.games.indexOf(game), 1);
  }


  function closeGamePopup() {
    setSelectedGame(null);
  }
  
  return (
    <>
        <Header/>
        <Main 
          user={user}
          games={games}
          onGameClick={handleGameClick}
          onAddClick={handleAddClick}
          onRemoveClick={handleRemoveClick}
        />
        <GamePopup card={selectedGame} onClose={closeGamePopup}/>
        <Footer/>
        
    </>
  );
}

export default App;