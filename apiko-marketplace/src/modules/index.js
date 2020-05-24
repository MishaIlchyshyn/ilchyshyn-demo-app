import { combineReducers } from "redux";
import app from "./app";
import auth from "./auth";
import viewer from "./viewer";
import products from "./products";
import user from "./user";

export default combineReducers({
  app,
  auth,
  viewer,
  products,
  user,
});
