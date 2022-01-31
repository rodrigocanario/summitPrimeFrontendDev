import { toggleLoading } from "../Actions";

export const Logout = () => {
  return async (dispatch) => {
    dispatch(toggleLoading(true));
    localStorage.clear();
    document.location.reload();
  };
};
