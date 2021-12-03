import { loading, login, setError } from "./Actions";
import CallBackend from "./CallBackend";

export const getUserInfo = () => {
  return async (dispatch) => {
    dispatch(loading(true));
    let token = localStorage.getItem("token");
    if (token) {
      await CallBackend("/isAuth", token)
        .then((r) => {
          console.log(r);
          dispatch(login(r));
          dispatch(loading(false));
        })
        .catch((err) => {
          window.localStorage.removeItem("token");
          dispatch(loading(false));
          window.location.reload();
        });
    } else {
      dispatch(loading(false));
    }
  };
};
