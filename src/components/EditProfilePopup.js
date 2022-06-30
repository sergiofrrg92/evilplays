import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {

    
    // Subscription to the context
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");


    // After loading the current user from the API
    // their data will be used in managed components.
    React.useEffect(() => {
      if (currentUser) { 
        setName(currentUser.name); 
        setDescription(currentUser.about); 
      }  
    }, [currentUser, props.isOpen]);
    
    function handleNameOnChange(evt) {
        setName(evt.target.value);
    }

    function handleDescriptionOnChange(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();
      
        // Pass the values of the managed components to the external handler
        props.onUpdateUser({
          newName: name,
          newAbout: description,
        });
    }

    return (
        <PopupWithForm title="Edit profile" name="edit" isOpen={props.isOpen} buttonText="Save" onClose={props.onClose} onSubmit={handleSubmit}>
            <input
              id="form__name-input"
              className="form__text-input"
              type="text"
              name="name"
              placeholder="Name"
              required
              minLength="2"
              maxLength="40"
              onChange={handleNameOnChange}
              value={name || ''}
            />
            <span className="form__input-error form__name-input-error"></span>
            <input
              id="form__about-me-input"
              className="form__text-input"
              type="text"
              name="about-me"
              placeholder="About me"
              required
              minLength="2"
              maxLength="200"
              onChange={handleDescriptionOnChange}
              value={description || ''}
            />
            <span className="form__input-error form__about-me-input-error"></span>
        </PopupWithForm>
  );
}

export default EditProfilePopup;