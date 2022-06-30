import React from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js'
import Login from './Login';
import Register from './Register';
import InfoToolTip from './InfoToolTip';
import ProtectedRoute from './ProtectedRoute';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import { signin, signup, validateToken } from '../utils/auth';

function App(props) {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [currentEmail, setCurrentEmail] = React.useState("");
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    console.log("UseEffect checking token");
    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  React.useEffect(() => {

    api.getUserInfo()
      .then((userData) => {
        console.log("api.getUserInfo: ");
        console.log(userData);
        const newUser = userData.data;
        setCurrentUser( currentData => ({
          ...currentData,
          ...newUser
        }));
      })
      .catch( err => {
        console.log(err);
      });
  }, [loggedIn]);

  React.useEffect(() => {

    api.getInitialCards()
      .then((newCards) => {
        console.log("api.getInitialCards: ");
        console.log(newCards);
        setCards(newCards.data);
      })
      .catch( err => {
        console.log(err);
      });
  }, [loggedIn]);

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', closeByEscape)
    
    return () => document.removeEventListener('keydown', closeByEscape)
}, [])

  function checkToken() {
    const token = localStorage.getItem('token');
    if (typeof token !== 'undefined') {
      validateToken(token)
      .then((res) => {
        if (res.data) {
          console.log("Adding stuff to headers");
          api.setAuthorization("Bearer " + token);
          setLoggedIn(true);
          setCurrentEmail(res.data.email);
          props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      })
    }
  };
  
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    // Check one more time if this card was already liked
    console.log(card);
    const isLiked = card.likes.some(user => user === currentUser._id);

    console.log(isLiked);
    
    // Send a request to the API and getting the updated card data
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      console.log("api.changeLikeCardStatus: ");
      console.log(newCard);
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard.data : currentCard));
    })
    .catch( err => {
      console.log(err);  
    });
  } 

  function handleCardDelete(card) {
    // Send a request to the API and getting the updated card data
    api.deleteCard(card._id)
    .then(() => {
      console.log("api.deleteCard:");
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id ));
    })
    .catch( err => {
      console.log(err);
    });
  } 

  function handleUpdateUser({ newName, newAbout }) {
    api.setUserInfo({ newName, newAbout })
    .then((userData) => {
      console.log("api.setUserInfo: ");
      console.log(userData);
      setCurrentUser( currentData => ({
        ...currentData,
        ...userData.data
      }));
 
      closeAllPopups();
    })
    .catch( err => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(newAvatar) {
    api.updateAvatar(newAvatar)
    .then((userData) => {
      console.log("api.updateAvatar: ");
      console.log(userData);
      setCurrentUser( currentData => ({
        ...currentData,
        ...userData.data
      }));
      closeAllPopups();
    })
    .catch( err => {
      console.log(err);
    });
  }

  function handleAddPlaceSubmit({ cardName, cardLink }) {
    api.setNewCard( { cardName, cardLink })
    .then((card) => {
      console.log("api.setNewCard: ");
      console.log(card);
      setCards([card.data, ...cards]); 
      closeAllPopups();
    })
    .catch( err => {
      console.log(err);
    });
  }

  function handleLogin(email, password) {
    signin( email, password)
    .then((data) => {
      console.log(data);
      setCurrentEmail(email);
      localStorage.setItem("token", data.token);
      api.setAuthorization("Bearer " + data.token);
      setLoggedIn(true);
      props.history.push("/");
    })
    .catch(err => {
      console.log(err);
    })

  }

  function handleRegistration(email, password) {
    signup(email, password)
    .then((data) => {
      console.log(data);
      if(data.error) {
        setIsRegistrationSuccess(false);
        
      } else {
        setIsRegistrationSuccess(true);
      }
      
    })
    .catch(err => {
      console.log(err);
      setIsRegistrationSuccess(false);

    })
    .finally(() => {
      setIsInfoToolTipOpen(true);
    })
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    props.history.push('/login');
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setIsInfoToolTipOpen(false);
  }


  return (
    <div className="page__container">
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} handleLogoutClick={handleLogout} userEmail={currentEmail}/>
        <Switch>
          {/* <ProtectedRoute exact path="/" loggedIn={loggedIn} >  */}
        
            
            <Main 
                cards={cards}
                onEditProfileClick={handleEditProfileClick} 
                onAddPlaceClick={handleAddPlaceClick}
                onEditAvatarClick={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}/> 
            <Footer/>
            
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 

            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlaceSubmit={handleAddPlaceSubmit}/>

            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

            <PopupWithForm title="popup-delete" name="delete" buttonText="Yes">
                <h2 className="form__title form__title-delete">Are you sure?</h2>
            </PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    
          {/* </ProtectedRoute> */}
          <Route exact path="/login">
            <div className="login-container">
              <Login handleLogin={handleLogin} isOpen={isInfoToolTipOpen}/>
            </div>
          </Route>
          <Route exact path="/register">
            <div className="register-container">
              <Register handleRegister={handleRegistration}/>
              <InfoToolTip isOpen={ isInfoToolTipOpen } isSuccess={ isRegistrationSuccess } onClose={closeAllPopups}/>
            </div>
          </Route>
          <Route path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default withRouter(App);
