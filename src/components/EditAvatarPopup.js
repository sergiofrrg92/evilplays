import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

    const inputRef = React.useRef();
    const [avatar, setAvatar] = React.useState("");

    React.useEffect(() => {
      inputRef.current.value = "";
    }, [props.isOpen]);
    
    function handleAvatarOnChange(evt) {
      setAvatar(evt.target.value);
    }

    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
        
        props.onUpdateAvatar(
            avatar
        );

    }

    return (
        <PopupWithForm title="Change profile picture" name="edit-avatar" buttonText="Save" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
          <input
            id="form__avatar-link-input"
            className="form__text-input"
            type="url"
            name="avatar-link"
            placeholder="Avatar link"
            ref={inputRef}
            value={avatar || ''}
            onChange={handleAvatarOnChange}
            required
          />
          <span className="form__input-error form__avatar-link-input-error"></span>

        </PopupWithForm>
  );
}

export default EditAvatarPopup;