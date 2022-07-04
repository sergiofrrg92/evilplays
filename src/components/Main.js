import React from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

function Main(props) {

  const [query, setQuery] = React.useState("")

  function handleSearch(event) {
    console.log(event.target.value);
    setQuery(event.target.value);
  }

  function renderCards() {
    console.log("render cards");
    const filteredCards = props.cards.filter(card => {
      return card.name.toLowerCase().includes(query.toLowerCase());
    });
    return filteredCards.map(card => {
      return <Card 
                key={card.id} 
                image={card.image} 
                name={card.name} 
                released={card.released}
                rating={card.rating}
                description={card.description}
                card={card}
                onGameClick={props.onGameClick}
              />;
    });
  }

  return (
    <main className="main">
        <section className="games">
          <SearchBar onInputChange={handleSearch}/>
          <ul className="games__grid">
            {renderCards()}
          </ul>
        </section>
    </main>
  );
}

export default Main;