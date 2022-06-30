
function ImagePopup(props) {
    return (
    <div className={`popup popup-photo ${props.card && 'popup_opened'}`}>
        <div className="popup-photo__container">
          <button
            type="button"
            className="popup__close-button"
            aria-label="Photo close button"
            onClick={props.onClose}
          ></button>
          <img
            className="popup-photo__photo"
            src={props.card && props.card.link}
            alt="Selected"
          />
          <p className="popup-photo__title">{props.card && props.card.name}</p>
        </div>
      </div>
    );
  }
  
  export default ImagePopup;