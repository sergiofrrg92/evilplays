class Api {
    constructor(options) {
        this._options = options;
    }

    getInitialCards() {
        return fetch(this._options.baseUrl+"/cards/", {
            headers: this._options.headers
          })
          .then(this._checkResponse);
    }

    setNewCard( { cardName, cardLink }) {
      return fetch(this._options.baseUrl+"/cards/", {
        method: "POST",
        headers: this._options.headers,
        body: JSON.stringify({
          name: cardName,
          link: cardLink
        })
      })
      .then(this._checkResponse);
    }

    addLike(id) {
      return fetch(this._options.baseUrl+"/cards/"+id+"/likes/", {
        method: "PUT",
        headers: this._options.headers
      })
      .then(this._checkResponse);
    }

    removeLike(id) {
      return fetch(this._options.baseUrl+"/cards/"+id+"/likes/", {
        method: "DELETE",
        headers: this._options.headers
      })
      .then(this._checkResponse);
    }

    changeLikeCardStatus(id, newStatus) {
      return newStatus ? this.addLike(id) : this.removeLike(id);
    }

    deleteCard(id) {
      return fetch(this._options.baseUrl+"/cards/"+id, {
        method: "DELETE",
        headers: this._options.headers
      })
      .then(this._checkResponse);
    }

    getUserInfo() {
      console.log(this._options.headers);
      return fetch(this._options.baseUrl+"/users/me", {
        headers: this._options.headers
      })
      .then(this._checkResponse);
    }

    setUserInfo( { newName, newAbout }) {
      return fetch(this._options.baseUrl+"/users/me", {
        method: "PATCH",
        headers: this._options.headers,
        body: JSON.stringify({
          name: newName,
          about: newAbout
        })
      })
      .then(this._checkResponse);
    }

    updateAvatar(link) {
      return fetch(this._options.baseUrl+"/users/me/avatar", {
        method: "PATCH",
        headers: this._options.headers,
        body: JSON.stringify({
          avatar: link
        })
      })
      .then(this._checkResponse);
    }

    setAuthorization(token) {
      this._options.headers.authorization = token;
    }
    
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    }

}

export { Api }

