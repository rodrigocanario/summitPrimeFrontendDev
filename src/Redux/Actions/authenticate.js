import { loading, login } from "./Actions";
import CallBackend from "./CallBackend";

export const authenticate = (form) => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");
    dispatch(loading(true));
    if (token) {
      await CallBackend("/isAuth", token)
        .then((r) => {
          dispatch(login(r));
          dispatch(loading(false));
        })
        .catch((err) => {
          window.localStorage.removeItem("token");
          dispatch(loading(false));
          window.location.reload();
        });
    } else if (typeof form === "object" && form !== null) {
      await CallBackend("/login", "", form)
        .then((resp) => {
          if (resp && resp.token) {
            localStorage.setItem("token", resp.token);
            dispatch(login(resp));
            dispatch(loading(false));
          }
        })
        .catch((e) => {
          throw e;
        });
    } else {
      dispatch(loading(false));
    }
  };
};
