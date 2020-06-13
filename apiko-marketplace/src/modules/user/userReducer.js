import { handleActions } from "@letapp/redux-actions";
import * as actions from "./userActions";

const INITIAL_STATE = {
  user: {
    isLoading: false,
    isError: false,
    error: null,
  },
};

export default handleActions(
  {
    [actions.fetchUserById.start]: (state) => ({
      ...state,
      user: {
        ...state.user,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchUserById.success]: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        isLoading: false,
        user: action.payload,
      },
    }),
    [actions.fetchUserById.error]: (state, action) => ({
      ...state,
      user: {
        ...state.user,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE
);
