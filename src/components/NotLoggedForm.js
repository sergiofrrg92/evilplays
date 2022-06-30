import React from 'react';
import { Link, withRouter } from "react-router-dom";

function NotLoggedForm(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleEmailOnChange(evt) {
        setEmail(evt.target.value);
      }
  
      function handlePasswordOnChange(evt) {
        setPassword(evt.target.value);
      }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(email, password);
        setEmail('');
        setPassword('');
        if(props.type === "login") {
            console.log("redirect");
            props.history.push('/');
        }else {
            props.history.push('/register');
        }
      }

    return (
          
        <form className={`not-logged-form not-logged-form-${props.type}`} name={`${props.type}-form`} onSubmit={handleSubmit}>
            <h2 className="not-logged-form__title">{props.title}</h2>
            <input
            id="not-logged-form__email-input"
            className="not-logged-form__text-input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailOnChange}
            value={email || ''}
            required
            />
            <input
            id="not-logged-form__password-input"
            className="not-logged-form__text-input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handlePasswordOnChange}
            value={password || ''}
            required
            />
            <span className="not-logged-form__input-error not-logged-form__avatar-link-input-error"></span>
            <button className="not-logged-form__submit-button not-logged-form__save-button" type="submit">
                {props.buttonText}
            </button>
            <Link to={`${props.redirectTo}`} className="not-logged-form__redirect">{props.redirectText}</Link>
        </form>

      );
}

export default withRouter(NotLoggedForm);