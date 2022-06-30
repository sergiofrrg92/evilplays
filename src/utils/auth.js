//export const BASE_URL = "https://api.sergiofrrg.students.nomoreparties.sbs";
export const BASE_URL = "http://localhost:3000";

export const signup = ( newEmail, newPassword ) => {

    return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        password: newPassword, 
        email: newEmail 
      }),
    })
    .then(_checkResponse);
  };

export const signin = (newEmail, newPassword) => {

    return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        password: newPassword, 
        email: newEmail 
      }),
    })
    .then(_checkResponse);
  };

  export const validateToken = (token) => {
    console.log("Bearer " + token);
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : "Bearer " + token
      },
    })
    .then(_checkResponse);
  };


function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }