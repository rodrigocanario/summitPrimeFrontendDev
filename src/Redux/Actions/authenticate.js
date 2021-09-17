import { loading, login } from "./Actions";
import CallBackend from "./CallBackend";

export const authenticate = (form) => {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(loading(true));
      CallBackend("/isAuth", token)
        .then((r) => {
          dispatch(login(r));
          dispatch(loading(false));
        })
        .catch((err) => {
          console.log({ "deu erro": err });
        });
    } else if (typeof form === "object" && form !== null) {
      dispatch(loading(true));
      CallBackend("/login", "", form)
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
    }
  };
};
