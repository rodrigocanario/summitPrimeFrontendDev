import { loading, login, setError } from "./Actions";
import CallBackend from "./CallBackend";

export const authenticate = (form) => {
  return async (dispatch) => {
    // let token = localStorage.getItem("token");
    // if (token) {
    //   await CallBackend("/isAuth", token)
    //     .then((r) => {
    //       dispatch(login(r));
    //       dispatch(loading(false));
    //     })
    //     .catch((err) => {
    //       window.localStorage.removeItem("token");
    //       dispatch(loading(false));
    //       window.location.reload();
    //     });
    // } else if (typeof form === "object" && form !== null) {
    dispatch(loading(true));
    await CallBackend("/login", "", form)
      .then((resp) => {
        if (resp && resp.token) {
          localStorage.setItem("token", resp.token);
          resp.isAuth = true;
          dispatch(login(resp));
          dispatch(setError("login", false));
          dispatch(loading(false));
        }
      })
      .catch((e) => {
        console.log(e);
        dispatch(setError("login", true));
        dispatch(loading(false));
      });
  };
};
