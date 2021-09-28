import { changePage, hideSalvosModal, updateOrcamentos } from "./Actions";
import callBackend from "./CallBackend";
import { GetOrcamentos } from "./GetOrcamentos";

export const criarOrcamento = (infos, changePagina) => {
  return async (dispatch) => {
    let token = localStorage.getItem("token");
    let id = Math.random().toString(36).slice(-8).toUpperCase();
    let date = new Date();
    let offset = date.getTimezoneOffset();
    date = date - offset * 60000;
    let orcamentoPadrao = {
      id,
      titulo: "",
      cnpj: "",
      subTotal: 0,
      subTotalDisponivel: 0,
      total: "0",
      totalDisponivel: 0,
      pagamentoAntecipado: false,
      itens: [],
      criadoEm: new Date(date),
      ultimaModificacao: new Date(date),
    };
    let orcamento = { ...orcamentoPadrao, ...infos };
    console.log(orcamento);
    await callBackend("/putOrcamento", token, { orcamento }).then(async (r) => {
      await dispatch(GetOrcamentos("salvos", parseInt(infos.cnpj), false));
      dispatch(updateOrcamentos({ atual: id }));
      dispatch(hideSalvosModal());
      if (changePagina) {
        dispatch(changePage("home"));
      }
      Promise.resolve();
    });
  };
};
