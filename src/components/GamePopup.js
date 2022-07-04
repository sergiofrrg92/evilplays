function GamePopup(props) {
    return (
        <div className={`popup popup-game ${props.card && 'popup_opened'}`}>
            <div className="popup-game__container container">
              { <button
                type="button"
                className="popup__close-button"
                aria-label="Photo close button"
                onClick={props.onClose}
              ></button> }
              <img
                className="popup-game__photo"
                src={props.card && props.card.image}
                alt="Selected"
              />
              <p className="popup-game__title">{props.card && props.card.name}</p>
              <p className="popup-game__ratings">{props.card && props.card.rating}</p>
              <p className="popup-game__description">{props.card && props.card.description}</p>
            </div>
          </div>
        );
}

export default GamePopup;