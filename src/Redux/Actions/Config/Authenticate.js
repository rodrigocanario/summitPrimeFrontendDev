import { setError, toggleLoading } from "../Actions";
import CallBackend from "../Utils/CallBackend";
import { GetUserInfo } from "./GetUserInfo";

export const authenticate = (form) => {
  return async (dispatch, getState) => {
    dispatch(toggleLoading(true));
    let { socket } = getState().config;

    await CallBackend(socket, "login", "", form)
      .then((resp) => {
        if (resp && resp.token) {
          localStorage.setItem("token", resp.token);
          dispatch(GetUserInfo());
          dispatch(setError("login", false));
          dispatch(toggleLoading(false));
        }
        if (resp && resp.error) {
          console.log(resp.error);
          dispatch(setError("login", true));
          dispatch(toggleLoading(false));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
