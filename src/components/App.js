import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import GamePopup from "./GamePopup";
import Footer from "./Footer";
import EditHoursPopup from "./EditHoursPopup";

import user from "../utils/user";

import { api } from '../utils/rawgApi';

function App() {

  const SHOWN_DELTA = 6;

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [selectedGame, setSelectedGame] = React.useState(null);
  const [selectedGameForEdition, setSelectedGameForEdition] = React.useState(null);
  const [isEditHoursPopupOpen, setIsEditHoursPopupOpen] = React.useState(false);
  const [currentGameIndex, setCurrentGameIndex] = React.useState(0);
  const [games, setGames] = React.useState([]);
  const [shownGames, setShownGames] = React.useState([]);

  React.useEffect(() => {
    console.log("Loading user");
    setCurrentUser( currentData => ({
      ...currentData,
      ...user
    }));
    setLoggedIn(true);
    console.log(currentUser);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {

    api.getInitialGames()
      .then((newGames) => {
        console.log("api.getInitialGames: ");
        console.log(newGames);
        console.log(newGames.results.slice(0, SHOWN_DELTA));
        setGames(newGames.results);
        if(newGames.results.length >= currentGameIndex + SHOWN_DELTA) {
          setShownGames(newGames.results.slice(0, currentGameIndex+SHOWN_DELTA));
          setCurrentGameIndex(currentGameIndex + SHOWN_DELTA);
        } else {
          setShownGames(newGames.results.slice(currentGameIndex, newGames.results.length));
          setCurrentGameIndex(newGames.results.length);
        }
        
      })
      .catch( err => {
        console.log(err);
      });
  }, [loggedIn]);

  function handleLogoutClick() {
    console.log("login out");
    setLoggedIn(false);
    setCurrentUser({});
  }

  function handleLoginClick() {
    console.log("login in");
    setLoggedIn(true);
    setCurrentUser( currentData => ({
      ...currentData,
      ...user
    }));
  }
  
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

  function handleShowMoreClick() {
    console.log("handleShowMoreClick: ", currentGameIndex);
    console.log(games);
    console.log(shownGames);
    if(currentGameIndex + SHOWN_DELTA < games.length) {
      console.log([...shownGames, ...games.slice(currentGameIndex, currentGameIndex+SHOWN_DELTA)])
      setShownGames([...shownGames, ...games.slice(currentGameIndex, currentGameIndex+SHOWN_DELTA)]);
      setCurrentGameIndex(currentGameIndex + SHOWN_DELTA);
    } else {
      setShownGames([...shownGames, ...games.slice(currentGameIndex, games.length)]);
      setCurrentGameIndex(games.length);
    }
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
    <div className="page__container">
        <Header loggedIn={loggedIn} user={currentUser.email} onLoginClick={handleLoginClick} onLogoutClick={handleLogoutClick}/>
        <Switch>
          <Route>
            <Main 
              user={user}
              currentGameIndex = {currentGameIndex}
              games={shownGames}
              allGames={games}
              onGameClick={handleGameClick}
              onAddClick={handleAddClick}
              onRemoveClick={handleRemoveClick}
              onEditHoursClick={handleEditHoursClick}
              onShowMoreClick={handleShowMoreClick}
            />
          </Route>
        </Switch>
        <GamePopup card={selectedGame} onClose={closeAllPopups}/>
        <Footer/>
        <EditHoursPopup game={selectedGameForEdition} isOpen={isEditHoursPopupOpen} onClose={closeAllPopups} onEditHoursSubmit={handleEditHoursSubmit}/>
        
    </div>
  );
}

export default App;