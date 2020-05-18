import * as actions from "./viewerActions";
import Api from "../../api";

export function fetchViewer() {
  return async function initThunck(dispatch) {
    try {
      dispatch(actions.fetchViewer.start());

      const res = await Api.Viewer.get();

      Api.init();

      dispatch(actions.fetchViewer.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchViewer.error({ message: err.message }));
    }
  };
}
