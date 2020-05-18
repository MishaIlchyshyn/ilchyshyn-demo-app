import * as actions from "./productsActions";
import Api from "../../api";

export function fetchLatest() {
  return async function fetchLatestThunck(dispatch) {
    try {
      dispatch(actions.fetchLatest.start());

      const res = await Api.Products.getLatest();

      dispatch(actions.fetchLatest.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchLatest.error({ message: err.message }));
    }
  };
}

export function fetchSaved() {
  return async function fetchLatestThunck(dispatch) {
    try {
      dispatch(actions.fetchSaved.start());

      const res = await Api.Products.getSaved();

      dispatch(actions.fetchSaved.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchSaved.error({ message: err.message }));
    }
  };
}

export function fetchDetail(id) {
  return async function fetchLatestThunck(dispatch) {
    try {
      dispatch(actions.fetchDetail.start());

      const res = await Api.Products.detailProduct(id);

      dispatch(actions.fetchDetail.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchDetail.error({ message: err.message }));
    }
  };
}

export function fetchSave(id) {
  return async function fetchLatestThunck(dispatch) {
    try {
      dispatch(actions.fetchSave.start());

      const res = await Api.Products.saveProduct(id);

      dispatch(actions.fetchSave.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchSave.error({ message: err.message }));
    }
  };
}
