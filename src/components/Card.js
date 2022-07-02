import React from "react";

function Card( {id, name, image, released, rating, description } ) {
  return (
    <li className="game-card">
        <img className="game-card__image" src={image} alt={name} /*onClick={handleClick}*//>
        <div className="game-card__footer">
            <h2 className="game-card__title">{name}</h2>
            <p className="game-card__rating">{rating}</p>
        </div>
    </li>
  );
}

export default Card;