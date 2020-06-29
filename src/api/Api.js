import axios from "axios";

const urls = {
  login: "/api/auth/login",
  register: "/api/auth/register",
  getViewer: "/api/account",
  products: "api/products",
  productsLatest: "api/products/latest",
  productsSaved: "/api/products/saved",
  productDetail: "/api/products/",
  productSave: "/saved",
  productUnsave: "/saved",
  productsUsers: "/api/users",
  productsSearch: "/api/products/search",
  getUserById: "/api/users/",
  updateUserAccount: "/api/account",
  uploadImage: "/api/upload/images",
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
    return axios.post(urls.productDetail + `${id}` + urls.productSave, {
      Authorization: `Bearer ${this._token}`,
    });
  },

  unsaveProduct(id) {
    return axios.delete(urls.productDetail + `${id}` + urls.productUnsave, {
      Authorization: `Bearer ${this._token}`,
    });
  },

  detailProduct(id) {
    return axios.get(urls.productDetail + `/${id}`);
  },

  getUsersProducts(id) {
    return axios.get(urls.productsUsers + `/${id}/products`);
  },

  createNewProduct(product) {
    return axios.post(urls.products, product, {
      Authorization: `Bearer ${this._token}`,
    });
  },

  getProductsSearch(queryParams) {
    return axios.get(urls.productsSearch + queryParams);
  },
};

export const Users = {
  getUserById(id) {
    return axios.get(urls.getUserById + `${id}`);
  },

  updateUserAccount(user) {
    return axios.put(urls.updateUserAccount, user, {
      Authorization: `Bearer ${this._token}`,
    });
  },

  uploadImage(formData) {
    return axios.post(urls.uploadImage, formData, {
      Authorization: `Bearer ${this._token}`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export function init() {
  Auth.init();
}
