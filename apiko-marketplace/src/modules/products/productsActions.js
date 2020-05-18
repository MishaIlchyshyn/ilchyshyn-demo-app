import { createAsyncActions } from "@letapp/redux-actions";

export const fetchLatest = createAsyncActions("products/FETCH_LATEST");
export const fetchSaved = createAsyncActions("products/FETCH_SAVED");
export const fetchDetail = createAsyncActions("products/FETCH_DETAIL");
export const fetchSave = createAsyncActions("products/FETCH_SAVE");
