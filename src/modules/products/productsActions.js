import { createAsyncActions } from "@letapp/redux-actions";

export const fetchLatest = createAsyncActions("products/FETCH_LATEST");
export const fetchSaved = createAsyncActions("products/FETCH_SAVED");
export const fetchDetail = createAsyncActions("products/FETCH_DETAIL");
export const fetchSave = createAsyncActions("products/FETCH_SAVE");
export const fetchUnsave = createAsyncActions("products/FETCH_UNSAVE");
export const fetchUsersProducts = createAsyncActions(
  "products/FETCH_USERS_PRODUCTS"
);
export const fetchAddProduct = createAsyncActions("products/FETCH_ADD_PRODUCT");
export const fetchProductsSearch = createAsyncActions(
  "products/FETCH_PRODUCTS_SEARCH"
);
