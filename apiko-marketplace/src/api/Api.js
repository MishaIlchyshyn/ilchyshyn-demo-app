export const Auth = {
  _token: null,

  setToken(token) {
    this._token = token;
    localStorage.setItem("___token", JSON.stringify(token));
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    };

    return fetch("/api/auth/login", requestOptions).then((response) =>
      response.json()
    );
  },

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("___token");
    localStorage.removeItem("userData");
    this._token = null;
  },

  register({ email, fullName, password }) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, fullName, password }),
    };

    return fetch("/api/auth/register", requestOptions).then((response) =>
      response.json()
    );
  },
};
