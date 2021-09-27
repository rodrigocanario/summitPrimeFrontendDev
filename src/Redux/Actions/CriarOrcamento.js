import { changePage, hideSalvosModal, updateOrcamentos } from "./Actions";
import callBackend from "./CallBackend";
import { GetOrcamentos } from "./GetOrcamentos";

export const criarOrcamento = (infos) => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");
    let id = Math.random().toString(36).slice(-8).toUpperCase();
    let orcamentoPadrao = {
      id,
      titulo: "",
      cnpj: "",
      subTotal: 0,
      total: "0",
      pagamentoAntecipado: false,
      itens: [],
      ultimaModificacao: new Date(),
    };
    let orcamento = { ...orcamentoPadrao, ...infos };
    await callBackend("/putOrcamento", token, { orcamento }).then(async (r) => {
      await dispatch(GetOrcamentos("salvos", parseInt(infos.cnpj), false));
      dispatch(updateOrcamentos({ atual: id }));
      dispatch(hideSalvosModal());
      dispatch(changePage("home"));
    });
  };
};
