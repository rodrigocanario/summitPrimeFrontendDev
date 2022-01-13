import { loading } from "./Actions";
import callBackend from "./CallBackend";

export const sendOrcamento = () => {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    let token = localStorage.getItem("token");
    let orcamentos = getState().orcamentos.salvos;
    let orcamentoAtual = getState().orcamentos.atual;
    let informacoes = getState().informacoes;

    let orcamento = orcamentos.find((orc) => {
      return orc.id === orcamentoAtual;
    });

    let data = { orcamento, informacoes };

    await callBackend("/sendEmail", token, data).then(dispatch(loading(false)));
  };
};
