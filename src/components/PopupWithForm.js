
function PopupWithForm(props) {
  return (
    <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button"
            aria-label={`${props.name} form close button`}
            onClick={props.onClose}
          ></button>
          <form className="form" name={`${props.name}-form`} onSubmit={props.onSubmit}>
            <h2 className="form__title">{props.title}</h2>
            {props.children}
            <button className="form__submit-button form__save-button" type="submit">
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
  );
}

export default PopupWithForm;