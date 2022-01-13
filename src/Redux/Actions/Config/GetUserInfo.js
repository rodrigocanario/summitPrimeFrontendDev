import { logout, toggleLoading, updateDatabank } from "../Actions";
import { CalculateOrcamentosPrime } from "../Orcamentos/CalculateOrcamentosPrime";
import CallBackend from "../Utils/CallBackend";

export const getUserInfo = () => {
  return async (dispatch, getState) => {
    let { socket } = getState().config;
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(toggleLoading(true));
      await CallBackend(socket, "getUserInfo", token)
        .then(async (r) => {
          await dispatch(updateDatabank({ userInfo: r.informacoes }));
          await dispatch(updateDatabank({ produtos: r.produtos }));
          await dispatch(CalculateOrcamentosPrime(r.orcamentos));
        })
        .catch((err) => {
          // dispatch(logout());
          dispatch(toggleLoading(false));
        });
    } else {
      dispatch(logout());
      dispatch(toggleLoading(false));
    }
  };
};
