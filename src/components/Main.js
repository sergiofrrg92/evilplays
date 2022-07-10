import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

function Main(props) {

  const [query, setQuery] = React.useState("")
  const [allGamesSelected, setAllGamesSelected] = React.useState(true);
  const [myGamesSelected, setMyGamesSelected] = React.useState(false);
  const [myGamesSelectedModified, setMyGamesSelectedModified] = React.useState(false);

  React.useEffect(() => {
    if (myGamesSelectedModified) {
      setMyGamesSelected(true);
      setMyGamesSelectedModified(false);
    }
  }, [myGamesSelectedModified]);
  
  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleAllGamesClick() {
    setAllGamesSelected(true);
    setMyGamesSelected(false);
    setMyGamesSelectedModified(false);
  }

  function handleMyGamesClick() {
    setAllGamesSelected(false);
    setMyGamesSelected(true);
    setMyGamesSelectedModified(false);
  }

  function handleRemoveClick(game) {
    props.onRemoveClick(game);
    setMyGamesSelectedModified(true);
  }

  function handleShowMoreClick() {
    props.onShowMoreClick();
  }

  function renderGames(games) {
    const filteredGames = games.filter(game => {
      return game.name.toLowerCase().includes(query.toLowerCase());
    });
    return filteredGames.map(game => {
      return <Card 
                key={game.id} 
                image={game.background_image} 
                name={game.name} 
                released={game.released}
                rating={game.rating}
                description={game.description}
                hoursPlayed={game.hoursPlayed}
                game={game}
                onGameClick={props.onGameClick}
                onAddClick={props.onAddClick}
                onRemoveClick={handleRemoveClick}
                onEditHoursClick={props.onEditHoursClick}
                allGamesSelected={allGamesSelected}
                myGamesSelected={myGamesSelected}
              />;
    });
  }

  function totalHours() {
    let sum = 0;
    props.user.games.forEach(element => {
      sum+=parseInt(element.hoursPlayed);
    });

    return sum;
  }

  const totalHoursPlayed = totalHours();

  return (
    <main className="main">
        <section className="games">
          <button 
            className={`games__tab-selector ${allGamesSelected && 'games__tab-selector_selected'}`}
            onClick={handleAllGamesClick}
            >All Games</button>
          <button 
            className={`games__tab-selector ${myGamesSelected && 'games__tab-selector_selected'}`}
            onClick={handleMyGamesClick}
            >My Games</button>
          <SearchBar onInputChange={handleSearch}/>
          <ul className="games__grid">
            { allGamesSelected && !myGamesSelectedModified ? renderGames(props.games) : renderGames(props.user.games) }
          </ul>
          {myGamesSelected && <p className="games__total-hours">Total hours: {totalHoursPlayed}</p>}
          {props.currentGameIndex < props.allGames.length && 
          <button 
            className={`games__show-more`}
            onClick={handleShowMoreClick}
            >Show more</button>
        }
        </section>
    </main>
  );
}

export default Main;