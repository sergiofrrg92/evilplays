import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import Card from './Card';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
        <section className="profile">
          <div className="profile__info">
            <div className="profile__photo-container">
              <img
                id={currentUser.name}
                className="profile__photo"
                src={currentUser.avatar}
                alt="User's avatar"
              />
              <button
                  className="profile__photo-edit-button"
                  aria-label="Photo edit button"
                  type="button"
                  onClick={props.onEditAvatarClick}
              ></button>
              <div className="profile__photo-overlay"></div>
          </div>
            <div className="profile__text">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                aria-label="Edit button"
                type="button"
                onClick={props.onEditProfileClick}
              ></button>
              <p className="profile__description">{currentUser.about}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button"
            aria-label="Add button"
            onClick={props.onAddPlaceClick}
          ></button>
        </section>
        <section className="photos">
          <ul className="photos__grid">
            {props.cards.map(card => {
              return (<Card 
                key={card._id} 
                link={card.link} 
                name={card.name} 
                likes={card.likes.length}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
                />
              );
            })}
          </ul>
        </section>
      </main>
  );
}

export default Main;