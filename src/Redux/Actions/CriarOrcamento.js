import {
  changePage,
  hideSalvosModal,
  loading,
  toggleModal,
  updateOrcamentos,
} from "./Actions";
import callBackend from "./CallBackend";
import { GetOrcamentos } from "./GetOrcamentos";

export const criarOrcamento = (titulo, itens, changePagina) => {
  return async (dispatch, getState) => {
    dispatch(loading(true));
    let cnpj = getState().informacoes.cnpj;
    let token = localStorage.getItem("token");
    let id = Math.random().toString(36).slice(-8).toUpperCase();
    let orcamentoPadrao = {
      id,
      titulo: "",
      cnpj: "",
      subTotal: 0,
      subTotalDisponivel: 0,
      total: "0",
      totalDisponivel: 0,
      pagamentoAntecipado: false,
      itens: [
        {
          sku: "",
          nome: "",
          caixaMaster: 0,
          valor: 0,
          valorReal: 0,
          quantidade: 0,
          multiplo: 0,
          preco: 0,
          estoque: 0,
        },
      ],
      criadoEm: new Date(),
      ultimaModificacao: new Date(),
    };
    if (itens === false) {
      itens = orcamentoPadrao.itens;
    }
    let orcamento = { ...orcamentoPadrao, titulo, itens, cnpj };
    await callBackend("/putOrcamento", token, { orcamento });
    await dispatch(GetOrcamentos("salvos"));
    await dispatch(updateOrcamentos({ atual: id }));
    await dispatch(toggleModal("criarOrcamento", false));
    await dispatch(loading(false));
    if (changePagina) {
      await dispatch(changePage("orcamentoAtual"));
      await dispatch(toggleModal("informacoes", true));
    }
    Promise.resolve();
  };
};
