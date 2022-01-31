import { loading } from "../Actions";
import callBackend from "../Utils/CallBackend";

export const SendOrcamento = () => {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    let token = localStorage.getItem("token");
    let { socket } = getState().config;
    let index = getState().config.orcamentoAtivo;
    let {
      userInfo: {
        consultor: { email: vendedor },
      },
      orcamentosPrime,
    } = getState().databank;

    let orcamento = orcamentosPrime[index];
    let data = { orcamento, vendedor };
    await callBackend(socket, "sendOrcamento", token, data).then(
      dispatch(loading(false))
    );
  };
};
