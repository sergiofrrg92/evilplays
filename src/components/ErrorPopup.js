import React from 'react';
import failureIcon from '../images/something_went_wrong.svg';

function ErrorPopup(props) {

  const failureMessage = "Oops, something went wrong! Please try again reloading";

  console.log(props.isSuccess);

  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
        <div className="popup-error">
          <button
            type="button"
            className="popup__close-button"
            aria-label="Photo close button"
            onClick={props.onClose}
          ></button>
          <img
            className="popup-error__icon"
            src={failureIcon}
            alt={"Failure icon"}
          />
          <p className="popup-error__message">{failureMessage}</p>
        </div>
      </div>
  );
}

export default ErrorPopup;