import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditHoursPopup(props) {

    const [hours, setHours] = React.useState("");

    function handleHoursOnChange(evt) {
      setHours(evt.target.value);
    }


    React.useEffect(() => {
      setHours(props.game && props.game.hoursPlayed);
    }, [props.isOpen]);

    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
        console.log("Submiting hours: ", hours);
        props.onEditHoursSubmit(props.game, hours);

    }

    return (
        <PopupWithForm title="Edit Hours" name="edit-hours" buttonText="Add Hours" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input
              id="form__hours-input"
              className="form__text-input"
              type="number"
              name="hours"
              placeholder="Hours"
              required
              minLength="0"
              onChange={handleHoursOnChange}
              value={hours || ''}
            />
            <span className="form__input-error form__title-input-error"></span>
        </PopupWithForm>
  );
}

export default EditHoursPopup;