import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

function Main(props) {

  const [query, setQuery] = React.useState("")
  const [allGamesSelected, setAllGamesSelected] = React.useState(true);
  const [myGamesSelected, setMyGamesSelected] = React.useState(false);

  function handleSearch(event) {
    setQuery(event.target.value);
  }

  function handleAllGamesClick() {
    setAllGamesSelected(true);
    setMyGamesSelected(false);
  }

  function handleMyGamesClick() {
    setAllGamesSelected(false);
    setMyGamesSelected(true);
  }

  function renderGames(games) {
    const filteredGames = games.filter(game => {
      return game.name.toLowerCase().includes(query.toLowerCase());
    });
    return filteredGames.map(game => {
      return <Card 
                key={game.id} 
                image={game.image} 
                name={game.name} 
                released={game.released}
                rating={game.rating}
                description={game.description}
                game={game}
                onGameClick={props.onGameClick}
              />;
    });
  }

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
            { allGamesSelected ? renderGames(props.games) : renderGames(props.user.games) }
          </ul>
        </section>
    </main>
  );
}

export default Main;