import { toggleLoading, updateDatabank } from "../Actions";
import { SetFiltros } from "../Loja/SetFiltros";
import { ToggleFiltros } from "../Loja/ToggleFiltros";
import { CalculateOrcamentosPrime } from "../Orcamentos/CalculateOrcamentosPrime";
import CallBackend from "../Utils/CallBackend";
import { Logout } from "./Logout";

export const GetUserInfo = () => {
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
          await dispatch(SetFiltros());
          await dispatch(ToggleFiltros({ ordem: "start" }));
        })
        .catch((err) => {
          // dispatch(logout());
          dispatch(toggleLoading(false));
        });
    } else {
      dispatch(Logout());
      dispatch(toggleLoading(false));
    }
  };
};
