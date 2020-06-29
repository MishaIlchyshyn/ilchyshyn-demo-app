import { handleActions } from "@letapp/redux-actions";
import * as actions from "./viewerActions";

const INITIAL_STATE = {
  fetchViewer: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.fetchViewer.start]: (state) => ({
      ...state,
      fetchViewer: {
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchViewer.success]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.fetchViewer.error]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.viewerLogout.start]: (state) => ({
      ...state,
      fetchViewer: {
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.viewerLogout.success]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: "",
    }),
    [actions.viewerLogout.error]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchUpdateUserAccount.start]: (state) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchUpdateUserAccount.success]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      user: action.payload,
    }),
    [actions.fetchUpdateUserAccount.error]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),

    [actions.fetchUploadImage.start]: (state) => ({
      ...state,
      fetchViewer: {
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchUploadImage.success]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
      },
      avatarUrl: action.payload,
    }),
    [actions.fetchUploadImage.error]: (state, action) => ({
      ...state,
      fetchViewer: {
        ...state.fetchViewer,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE
);
