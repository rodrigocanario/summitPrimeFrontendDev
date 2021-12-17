import { loading, login, logout, setError } from "./Actions";
import CallBackend from "./CallBackend";

export const getUserInfo = () => {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    let { socket } = getState().pages;
    let token = localStorage.getItem("token");
    if (token) {
      await CallBackend(socket, "getUserInfo", token)
        .then((r) => {
          dispatch(login(r.informacoes));
          dispatch(loading(false));
        })
        .catch((err) => {
          dispatch(logout());
          dispatch(loading(false));
        });
    } else {
      dispatch(logout());
      dispatch(loading(false));
    }
  };
};
