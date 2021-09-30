import { changePage } from "./Actions";
import callBackend from "./CallBackend";
import { GetOrcamentos } from "./GetOrcamentos";

export const DeleteOrcamento = () => {
  return async (dispatch, getState) => {
    let token = localStorage.getItem("token");
    let id = getState().orcamentos.atual;
    let cnpj = getState().informacoes.cnpj;
    await callBackend("/deleteOrcamentoTable", token, {
      id,
      cnpj: `${cnpj}`,
    }).then(async (r) => {
      dispatch(changePage("orcamentosSalvos"));
      await dispatch(GetOrcamentos("salvos", cnpj, false));
    });
  };
};
