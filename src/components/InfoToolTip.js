import React from 'react';
import successIcon from '../images/all_good.svg';
import failureIcon from '../images/something_went_wrong.svg';

function InfoToolTip(props) {

  const successMessage = "Success! You have now been registered.";
  const failureMessage = "Oops, something went wrong! Please try again.";

  console.log(props.isSuccess);

  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
        <div className="popup-info-tooltip">
          <button
            type="button"
            className="popup__close-button"
            aria-label="Photo close button"
            onClick={props.onClose}
          ></button>
          <img
            className="popup-info-tooltip__icon"
            src={props.isSuccess ? successIcon : failureIcon}
            alt={props.isSuccess ? "Success icon" : "Failure icon"}
          />
          <p className="popup-info-tooltip__message">{props.isSuccess ? successMessage : failureMessage}</p>
        </div>
      </div>
  );
}

export default InfoToolTip;