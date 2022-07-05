import React from "react";

function Card( {id, name, image, released, rating, description, game, onGameClick, onAddClick, allGamesSelected, myGamesSelected } ) {

  function handleClick() {
    console.log("Card: ", game);
    onGameClick(game);
  }

  function handleAddClick() {
    onAddClick(game);
  }

  return (
    <li className="game-card">
        <img className="game-card__image" src={image} alt={name} onClick={handleClick}/>
        <div className="game-card__footer">
            <h2 className="game-card__title">{name}</h2>
            <p className="game-card__rating">{rating}</p>
            { allGamesSelected && 
              <button
                type="button"
                className="game-card__add-button"
                aria-label="Add to my games"
                onClick={handleAddClick}
              ></button> }
        </div>
    </li>
  );
}

export default Card;