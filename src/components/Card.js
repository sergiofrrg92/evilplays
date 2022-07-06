import React from "react";

import star from '../images/star.svg';

function Card( {id, name, image, released, rating, description, hoursPlayed, game, onGameClick, onAddClick, onRemoveClick, allGamesSelected, myGamesSelected } ) {

  function handleClick() {
    console.log("Card: ", game);
    onGameClick(game);
  }

  function handleAddClick() {
    onAddClick(game);
  }

  function handleRemoveClick() {
    onRemoveClick(game);
  }

  return (
    <li className="game-card">
        <img className="game-card__image" src={image} alt={name} onClick={handleClick}/>
        <div className="game-card__footer">
            <h2 className="game-card__title">{name}</h2>
              <div className="game-card__rating">
                <p className="game-card__rating-number">{Math.round(rating * 10) / 10}</p>
                <img
                  className="game-card__star"
                  src={star}
                  alt="Star"
                      />
            </div>
            {myGamesSelected && <p className="game-card__hours">Hours Played: {hoursPlayed}</p>}
        </div>
        { allGamesSelected ? 
              <button
                type="button"
                className="game-card__add-button"
                aria-label="Add to my games"
                onClick={handleAddClick}
              ></button> : 
              <button
              type="button"
              className="game-card__remove-button"
              aria-label="Remove from my games"
              onClick={handleRemoveClick}
            ></button>}
    </li>
  );
}

export default Card;