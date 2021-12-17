import { loading, login, setError } from "./Actions";
import CallBackend from "./CallBackend";
import { getUserInfo } from "./GetUserInfo";

export const authenticate = (form) => {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    let { socket } = getState().pages;

    await CallBackend(socket, "login", "", form)
      .then((resp) => {
        if (resp && resp.token) {
          localStorage.setItem("token", resp.token);
          dispatch(getUserInfo());
          dispatch(setError("login", false));
          dispatch(loading(false));
        }
        if (resp && resp.error) {
          console.log(resp.error);
          dispatch(setError("login", true));
          dispatch(loading(false));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
