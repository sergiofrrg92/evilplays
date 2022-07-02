import React from "react";
import Card from "./Card";

function Main(props) {
  return (
    <main className="main">
        <section className="games">
          <ul className="games__grid">
            {props.cards.map(card => {
              return (<Card 
                id={card.id} 
                image={card.image} 
                name={card.name} 
                released={card.released}
                rating={card.rating}
                description={card.description}
                /*onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}*/
                />
              );
            })}
          </ul>
        </section>
    </main>
  );
}

export default Main;