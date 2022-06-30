import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext"

function Card( {card, name, link, likes, onCardClick, onCardLike, onCardDelete} ) {

    const currentUser = React.useContext(CurrentUserContext);

    // Checking if the current user is the owner of the current card
    const isOwn = card.owner === currentUser._id;

    // Creating a variable which you'll then set in `className` for the delete button
    const cardDeleteButtonClassName = (
    `photo-card__delete-button ${isOwn ? 'photo-card__delete-button_visible' : 'photo-card__delete-button_hidden'}`
    );

    // Check if the card was liked by the current user
    const isLiked = card.likes.some(user => user === currentUser._id);

    // Create a variable which you then set in `className` for the like button
    const cardLikeButtonClassName = `photo-card__like-button ${isLiked && 'photo-card__like-button_active'}`;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className="photo-card">
            <img className="photo-card__photo" src={link} alt={name} onClick={handleClick}/>
            <div className="photo-card__footer">
                <h2 className="photo-card__title">{name}</h2>
            <div className="photo-card__like-group">
                <button
                type="button"
                className={cardLikeButtonClassName}
                aria-label="Like Button"
                onClick={handleLikeClick}
                ></button>
                <p className="photo-card__like-count">{likes}</p>
            </div>
            </div>
            <button
            type="button"
            className={cardDeleteButtonClassName}
            aria-label="Delete Button"
            onClick={handleDeleteClick}
            ></button>
        </li>
    );
  }
  
  export default Card;