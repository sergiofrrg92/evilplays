import React from "react";
import Header from "./Header";
import Main from "./Main";
import GamePopup from "./GamePopup";
import Footer from "./Footer";
import EditHoursPopup from "./EditHoursPopup";

import { games } from "../utils/games";
import user from "../utils/user";

function App() {

  const [selectedGame, setSelectedGame] = React.useState(null);
  const [selectedGameForEdition, setSelectedGameForEdition] = React.useState(null);
  const [isEditHoursPopupOpen, setIsEditHoursPopupOpen] = React.useState(false);

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

  function handleEditHoursClick(game) {
    setSelectedGameForEdition(game);
    setIsEditHoursPopupOpen(true);
  }

  function closeAllPopups() {
    setSelectedGame(null);
    setIsEditHoursPopupOpen(false);
  }

  function handleEditHoursSubmit(game, hours) {
    game.hoursPlayed = hours;
    closeAllPopups();
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
          onEditHoursClick={handleEditHoursClick}
        />
        <GamePopup card={selectedGame} onClose={closeAllPopups}/>
        <Footer/>

        <EditHoursPopup game={selectedGameForEdition} isOpen={isEditHoursPopupOpen} onClose={closeAllPopups} onEditHoursSubmit={handleEditHoursSubmit}/>
        
    </>
  );
}

export default App;