import * as actions from "./appActions";
import Api from "../../api";
import { viewerOperations } from "../viewer";

export function init() {
  return async function initThunck(dispatch) {
    try {
      dispatch(actions.initialization.start());

      Api.init();

      await dispatch(viewerOperations.fetchViewer());

      dispatch(actions.initialization.success());
    } catch (err) {
      console.log(err);
      dispatch(actions.initialization.error({ message: err.message }));
    }
  };
}
