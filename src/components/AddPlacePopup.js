import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const [title, setTitle] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleTitleOnChange(evt) {
      setTitle(evt.target.value);
    }

    function handleLinkOnChange(evt) {
      setLink(evt.target.value);
    }

    React.useEffect(() => {
      setTitle('');
      setLink('');
    }, [props.isOpen]);

    function handleSubmit(e) {
        // Prevent the browser from navigating to the form address
        e.preventDefault();

        console.log(title + " " + link);
        props.onAddPlaceSubmit({
          cardName: title, 
          cardLink: link
        });

    }

    return (
        <PopupWithForm title="New Place" name="add" buttonText="Create" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <input
              id="form__title-input"
              className="form__text-input"
              type="text"
              name="title"
              placeholder="Title"
              required
              minLength="2"
              maxLength="30"
              onChange={handleTitleOnChange}
              value={title || ''}
            />
            <span className="form__input-error form__title-input-error"></span>
            <input
              id="form__link-input"
              className="form__text-input"
              type="url"
              name="image-link"
              placeholder="Image link"
              onChange={handleLinkOnChange}
              value={link || ''}
              required
            />
            <span className="form__input-error form__link-input-error"></span>
        </PopupWithForm>
  );
}

export default AddPlacePopup;