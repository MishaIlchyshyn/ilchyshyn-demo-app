import { handleActions } from "@letapp/redux-actions";
import * as actions from "./productsActions";

const INITIAL_STATE = {
  latest: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  saved: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  detail: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  usersProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  searchProducts: {
    items: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  addProduct: {
    isLoading: false,
    isError: false,
    error: null,
  },
  saveProduct: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.fetchLatest.start]: (state) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchLatest.success]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.fetchLatest.error]: (state, action) => ({
      ...state,
      latest: {
        ...state.latest,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchSaved.start]: (state) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSaved.success]: (state, action) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.fetchSaved.error]: (state, action) => ({
      ...state,
      saved: {
        ...state.saved,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchDetail.start]: (state) => ({
      ...state,
      detail: {
        ...state.detail,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchDetail.success]: (state, action) => ({
      ...state,
      detail: {
        ...state.detail,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.fetchDetail.error]: (state, action) => ({
      ...state,
      detail: {
        ...state.detail,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchUsersProducts.start]: (state) => ({
      ...state,
      usersProducts: {
        ...state.usersProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchUsersProducts.success]: (state, action) => ({
      ...state,
      usersProducts: {
        ...state.usersProducts,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.fetchUsersProducts.error]: (state, action) => ({
      ...state,
      usersProducts: {
        ...state.usersProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchProductsSearch.start]: (state) => ({
      ...state,
      searchProducts: {
        ...state.searchProducts,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchProductsSearch.success]: (state, action) => ({
      ...state,
      searchProducts: {
        ...state.searchProducts,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.fetchProductsSearch.error]: (state, action) => ({
      ...state,
      searchProducts: {
        ...state.searchProducts,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchAddProduct.start]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchAddProduct.success]: (state) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
      },
    }),
    [actions.fetchAddProduct.error]: (state, action) => ({
      ...state,
      addProduct: {
        ...state.addProduct,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchSave.start]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSave.success]: (state) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
      },
    }),
    [actions.fetchSave.error]: (state, action) => ({
      ...state,
      saveProduct: {
        ...state.saveProduct,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE
);
