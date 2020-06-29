import { createAsyncActions } from "@letapp/redux-actions";

export const fetchViewer = createAsyncActions("viewer/FETCH_VIEWER");
export const fetchUpdateUserAccount = createAsyncActions(
  "user/FETCH_UPDATE_USER_ACCOUNT"
);
export const fetchUploadImage = createAsyncActions("viewer/FETCH_UPLOAD_IMAGE");
export const viewerLogout = createAsyncActions("viewer/VIEWER_LOGOUT");
