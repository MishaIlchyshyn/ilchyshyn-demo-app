import axios from "axios";

const urls = {
  login: "/api/auth/login",
  register: "/api/auth/register",
  getViewer: "/api/account/user",
  products: "/api/products/",
  productsLatest: "/api/products/latest",
  productsSaved: "/api/products/saved",
  productDetail: "/api/products/",
  productSave: "/save",
  productUnsave: "/unsave",
  productsUsers: "/api/users",
  getUserById: "/api/users/",
};

export const Auth = {
  _token: null,

  _storeToken() {
    try {
      window.localStorage.setItem("token", JSON.stringify(this._token));
    } catch (err) {
      console.log(err);
    }
  },

  _setTokenToAxios(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${this._token}`;
  },

  get isLoggedIn() {
    return !!this._token;
  },

  setToken(token) {
    this._token = token;

    this._storeToken(token);

    this._setTokenToAxios(token);
  },

  init() {
    try {
      const token = window.localStorage.getItem("token");
      this._token = JSON.parse(token);

      this._setTokenToAxios(token);
    } catch (err) {
      console.log(err);
    }
  },

  login(body) {
    return axios.post(urls.login, body);
  },

  register(body) {
    return axios.post(urls.register, body);
  },

  logout() {
    this._token = null;
    try {
      window.localStorage.removeItem("token");
    } catch (err) {
      console.log(err);
    }
  },
};

export const Viewer = {
  get() {
    return axios.get(urls.getViewer);
  },
};

export const Products = {
  getLatest() {
    return axios.get(urls.productsLatest);
  },

  getSaved() {
    return axios.get(urls.productsSaved, {
      Authorization: `Bearer ${this._token}`,
    });
  },

  saveProduct(id) {
    return axios.post(urls.products + `${id}` + urls.productSave, {
      Authorization: `Bearer ${this._token}`,
    });
  },

  unsaveProduct(id) {
    return axios.post(urls.products + `${id}` + urls.productUnsave, {
      Authorization: `Bearer ${this._token}`,
    });
  },

  detailProduct(id) {
    return axios.get(urls.productDetail + `/${id}`);
  },

  getUsersProducts(id) {
    return axios.get(urls.productsUsers + `/${id}/products`);
  },
};

export const Users = {
  getUserById(id) {
    return axios.get(urls.getUserById + `${id}`);
  },
};

export function init() {
  Auth.init();
}
