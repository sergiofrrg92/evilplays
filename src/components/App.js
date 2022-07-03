import React from "react";
import Header from "./Header";
import Main from "./Main";
import GamePopup from "./GamePopup";
import Footer from "./Footer";

import cards from "../utils/cards";

function App() {

  const [selectedGame, setSelectedGame] = React.useState(null);

  function handleGameClick(card) {
    console.log("handleGameClick: ", card);
    setSelectedGame(card);
  }

  function closeGamePopup() {
    setSelectedGame(null);
  }
  
  return (
    <>
        <Header/>
        <Main 
          cards={cards}
          onGameClick={handleGameClick}
        />
        <GamePopup card={selectedGame} onClose={closeGamePopup}/>
        <Footer/>
        
    </>
  );
}

export default App;