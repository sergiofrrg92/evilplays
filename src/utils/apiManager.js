class Api {
    constructor(options) {
        this._options = options;
    }

    getInitialGames() {
        return fetch(this._options.baseUrl+"/games?key="+this._options.token, {
            headers: this._options.headers
          })
          .then(this._checkResponse);
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

