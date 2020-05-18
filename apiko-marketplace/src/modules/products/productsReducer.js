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
  save: {
    items: [],
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

    [actions.fetchSave.start]: (state) => ({
      ...state,
      save: {
        ...state.save,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchSave.success]: (state, action) => ({
      ...state,
      save: {
        ...state.save,
        isLoading: false,
        items: action.payload,
      },
    }),
    [actions.fetchSave.error]: (state, action) => ({
      ...state,
      save: {
        ...state.save,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE
);