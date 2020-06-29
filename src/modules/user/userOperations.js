import * as actions from "./userActions";
import Api from "../../api";

export function fetchUserById(id) {
  return async function fetchLatestThunck(dispatch) {
    try {
      dispatch(actions.fetchUserById.start());

      const res = await Api.Users.getUserById(id);

      dispatch(actions.fetchUserById.success(res.data));
    } catch (err) {
      console.log(err);
      dispatch(actions.fetchUserById.error({ message: err.message }));
    }
  };
}
