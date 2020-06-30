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

export function fetchUploadImage(image) {
  return async function fetchLatestThunck(dispatch) {
    try {
      dispatch(actions.fetchUploadImage.start());

      const res = await Api.Users.uploadImage(image);

      dispatch(actions.fetchUploadImage.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchUploadImage.error({ message: err.message }));
    }
  };
}

export function fetchUpdateUserAccount(user) {
  return async function fetchLatestThunck(dispatch) {
    try {
      dispatch(actions.fetchUpdateUserAccount.start());

      const res = await Api.Users.updateUserAccount(user);

      dispatch(actions.fetchUpdateUserAccount.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchUpdateUserAccount.error({ message: err.message }));
    }
  };
}
